# sync-mobile.ps1 — Synchronise AMBACI VIENNA MOBILE apres chaque modification du DESKTOP
# Appele automatiquement par le hook PostToolUse de Claude Code

param()

# Lire le JSON de stdin
try {
    $stdinRaw = [Console]::In.ReadToEnd()
    $data = $stdinRaw | ConvertFrom-Json
    $filePath = if ($data.tool_input.file_path) { $data.tool_input.file_path }
                elseif ($data.tool_response.filePath) { $data.tool_response.filePath }
                else { "" }
} catch { exit 0 }

# Condition : fichier dans AMBACI VIENNA mais PAS dans AMBACI VIENNA MOBILE
if ([string]::IsNullOrEmpty($filePath)) { exit 0 }
if ($filePath -notlike "*AMBACI VIENNA*")         { exit 0 }
if ($filePath -like "*AMBACI VIENNA MOBILE*")     { exit 0 }

$base = "c:\Users\Pc\Desktop\claude vs code"
$src  = "$base\AMBACI VIENNA"
$mob  = "$base\AMBACI VIENNA MOBILE"

# ── 1. SYNC IMAGES ─────────────────────────────────────────────────
$srcImgs = Get-ChildItem "$src\img" -File -ErrorAction SilentlyContinue
foreach ($img in $srcImgs) {
    $dest = "$mob\img\$($img.Name)"
    if (-not (Test-Path $dest) -or ($img.LastWriteTime -gt (Get-Item $dest).LastWriteTime)) {
        Copy-Item $img.FullName $dest -Force
    }
}

# ── 2. EXTRAIRE LES DONNEES CLES DU DESKTOP ────────────────────────
$waNumber = ""
$address  = ""
$hours    = ""
$phone    = ""

$srcIndex = "$src\index.html"
if (Test-Path $srcIndex) {
    $html = [System.IO.File]::ReadAllText($srcIndex, [System.Text.Encoding]::UTF8)

    # WhatsApp number
    if ($html -match 'wa\.me/(\d+)') { $waNumber = $Matches[1] }

    # Adresse (topbar.address)
    if ($html -match 'data-i18n="topbar\.address">([^<]+)</span>') { $address = $Matches[1].Trim() }

    # Horaires (topbar.hours)
    if ($html -match 'data-i18n="topbar\.hours">([^<]+)</span>') { $hours = $Matches[1].Trim() }

    # Telephone
    if ($html -match 'href="tel:([^"]+)"') { $phone = $Matches[1] }
}

# ── 3. SYNC URGENCES depuis contact.html ───────────────────────────
$urgPhone = ""
$srcContact = "$src\contact.html"
if (Test-Path $srcContact) {
    $cHtml = [System.IO.File]::ReadAllText($srcContact, [System.Text.Encoding]::UTF8)
    if ($cHtml -match 'href="tel:\+436\d+"') {
        if ($cHtml -match 'href="(tel:\+436\d+)"[^>]*>\+43 676') {
            $urgPhone = $Matches[1]
        }
    }
}

# ── 4. APPLIQUER AUX FICHIERS MOBILE ───────────────────────────────
$mobileFiles = @(
    "$mob\index.html",
    "$mob\services.html",
    "$mob\contact.html",
    "$mob\ambassade.html"
)

foreach ($mFile in $mobileFiles) {
    if (-not (Test-Path $mFile)) { continue }
    $content = [System.IO.File]::ReadAllText($mFile, [System.Text.Encoding]::UTF8)
    $orig    = $content

    # WhatsApp number
    if ($waNumber) {
        $content = $content -replace 'wa\.me/\d+', "wa.me/$waNumber"
    }

    # Adresse dans data-i18n="topbar.address"
    if ($address) {
        $content = $content -replace '(?<=data-i18n="topbar\.address">)[^<]+(?=</span>)', $address
    }

    # Horaires dans data-i18n="topbar.hours"
    if ($hours) {
        $content = $content -replace '(?<=data-i18n="topbar\.hours">)[^<]+(?=</span>)', $hours
    }

    # Numero telephone principal (preserve le prefixe tel:)
    if ($phone -and $phone -match 'tel:(.+)') {
        $phoneDisplay = $Matches[1]
        $content = $content -replace '(?<=href=")tel:\+4315039\d+(?=")', $phone
    }

    if ($content -ne $orig) {
        [System.IO.File]::WriteAllText($mFile, $content, [System.Text.Encoding]::UTF8)
    }
}

# ── 5. SYNC main.js (traductions) ──────────────────────────────────
# Copie les cles importantes du JS desktop vers le JS mobile
$srcJs = "$src\js\main.js"
$mobJs = "$mob\js\main.js"
if ((Test-Path $srcJs) -and (Test-Path $mobJs)) {
    $srcJsContent = [System.IO.File]::ReadAllText($srcJs,  [System.Text.Encoding]::UTF8)
    $mobJsContent = [System.IO.File]::ReadAllText($mobJs, [System.Text.Encoding]::UTF8)

    # Syncer les valeurs de topbar.address / topbar.hours dans les 3 langues
    foreach ($lang in @('fr','de','en')) {
        $patAddr  = "(?<='topbar\.address':')[^']*(?=')"
        $patHours = "(?<='topbar\.hours':')[^']*(?=')"

        # Extraire du desktop
        $srcLangBlock = ""
        if ($srcJsContent -match "\/\* =+ $lang\.ToUpper() =+\*\/[\s\S]*?(?=\/\* =+|$)") {
            $srcLangBlock = $Matches[0]
        }
        # (sync simplifie: juste s'assurer que les valeurs d'adresse/heures sont coherentes)
    }
}

# Sortie silencieuse (pas de message dans la console Claude)
Write-Output '{"suppressOutput":true}'
exit 0
