/* ── USDI FC — Bilingual Engine (FR / EN) ── */

const T = {
  fr: {
    /* Announce bar */
    'announce':           '🔔 Détection de talents 2026 — <a href="#club">Inscriptions ouvertes</a>',

    /* Nav */
    'nav.home':           'Accueil',
    'nav.news':           'Actualités',
    'nav.team':           'Équipe',
    'nav.players':        'Joueurs',
    'nav.results':        'Résultats',
    'nav.club':           'Club',
    'nav.contact':        'Contact',
    'nav.join':           'Rejoindre',

    /* Hero */
    'hero.season':        '⚽ Saison 2025 / 2026',
    'hero.title':         'ENSEMBLE<br /><em>ON VA</em><br />PLUS LOIN',
    'hero.subtitle':      'Club de Football · Centre de Formation · Détection de Talents',
    'hero.cta1':          '▶ Voir les temps forts',
    'hero.cta2':          'Prochains matchs',
    'hero.badge':         'UNION SPORTIVE<br />DE LA DIASPORA',
    'hero.last':          'Dernier résultat',
    'hero.next':          'Prochain match',
    'hero.champ':         'Championnat',
    'hero.champ.sub':     'Ligue 1 Côte d\'Ivoire',
    'hero.ticket':        'Billetterie →',

    /* News */
    'news.heading':       'Actualités',
    'news.viewall':       'Tout voir →',
    'tab.all':            'Tout',
    'tab.match':          'Match',
    'tab.club':           'Club',
    'tab.academy':        'Formation',
    'tab.gallery':        'Galerie',
    'news.featured.title':'USDI FC 3 – 1 AS Tanda : Une victoire de caractère',
    'news.featured.meta': '10 Mai 2026 · 5 min de lecture',

    /* Sidebar */
    'sidebar.next':       'PROCHAIN MATCH',
    'sidebar.ticket':     'Billetterie',
    'sidebar.standings':  'CLASSEMENT',
    'sidebar.join.title': 'REJOINDRE LE CLUB',
    'sidebar.join.text':  'Centre de formation ouvert. Détection de talents disponible pour tous profils.',
    'sidebar.apply':      'Postuler maintenant →',

    /* Stats */
    'stat.matches':       'Matchs joués',
    'stat.wins':          'Victoires',
    'stat.goals':         'Buts marqués',
    'stat.members':       'Membres',
    'stat.trophies':      'Trophées',

    /* Fixtures */
    'fixtures.heading':   'Résultats & <span>Matchs</span>',
    'fixtures.all':       'Tous les matchs →',

    /* Spotlight */
    'spotlight.eye':      'Joueur du mois',
    'spotlight.detail':   'Attaquant · #9 · 18 buts cette saison',

    /* Players */
    'players.heading':    'Joueurs <span>Spotlight</span>',
    'players.all':        'Voir l\'effectif complet →',

    /* Club */
    'club.eyebrow':       'Qui sommes-nous',
    'club.title':         'Un club fondé sur<br /><em>l\'Opportunité</em>',
    'club.p1':            'Fondé en Côte d\'Ivoire, l\'USDI FC a été créé pour offrir aux jeunes footballeurs talentueux une véritable chance — un environnement professionnel, un encadrement de haut niveau, et un chemin clair vers une carrière dans le football.',
    'club.p2':            'Nous croyons que le talent est partout. Notre mission est de le découvrir, de le développer, et de le porter sur la scène mondiale.',
    'club.stat.teams':    'Équipes',
    'club.stat.players':  'Joueurs',
    'club.stat.founded':  'Fondé',
    'club.p1.title':      'Détection de Talents',
    'club.p1.text':       'Identification des talents bruts dans toutes les régions à travers des tournées de détection régulières et des essais ouverts.',
    'club.p2.title':      'Formation Professionnelle',
    'club.p2.text':       'Les joueurs bénéficient de programmes d\'entraînement quotidiens structurés, conçus par des entraîneurs certifiés UEFA.',
    'club.p3.title':      'Passerelles de Carrière',
    'club.p3.text':       'Création de liens entre les talents ivoiriens et les clubs de football à travers l\'Afrique et l\'Europe.',
    'club.p4.title':      'Communauté & Diaspora',
    'club.p4.text':       'Unir la diaspora ivoirienne autour d\'une passion partagée, de l\'investissement et de la fierté des talents locaux.',

    /* Newsletter */
    'newsletter.title':   'RESTEZ CONNECTÉ · NEWSLETTER USDI FC',
    'newsletter.sub':     'Recevez les actualités, résultats et événements du club directement dans votre boîte mail.',
    'newsletter.input':   'votre@email.com',
    'newsletter.btn':     'S\'inscrire →',

    /* Partners */
    'partners.heading':   'Nos <span>Partenaires</span>',

    /* Footer */
    'footer.brand':       'Club de football et centre de formation — construisons les champions de demain depuis la Côte d\'Ivoire. Ensemble, on va plus loin.',
    'footer.col1':        'Club',
    'footer.about':       'À propos',
    'footer.teams':       'Nos équipes',
    'footer.players':     'Joueurs',
    'footer.academy':     'Académie',
    'footer.staff':       'Staff technique',
    'footer.col2':        'Actualités',
    'footer.latest':      'Dernières news',
    'footer.results':     'Résultats',
    'footer.reports':     'Rapports de match',
    'footer.gallery':     'Galerie vidéo',
    'footer.col3':        'Contact',
    'footer.sponsor':     'Sponsoring',
    'footer.trials':      'Info détection',
    'footer.media':       'Relations presse',
    'footer.partner':     'Partenariats',
    'footer.copy':        '© 2026 USDI FC — Union Sportive de la Diaspora. Tous droits réservés.',
    'footer.legal':       'Mentions légales',
    'footer.privacy':     'Politique de confidentialité',

    /* Other pages */
    'page.teams.title':   'Nos <span>Équipes</span>',
    'page.teams.sub':     'Toutes les équipes USDI FC — des séniors à l\'académie',
    'page.players.title': 'Nos <span>Joueurs</span>',
    'page.players.sub':   'Découvrez les talents qui font la force de l\'USDI FC',
    'filter.all':         'Toutes',
    'filter.senior':      'Seniors',
    'filter.youth':       'Jeunes',
    'filter.academy':     'Académie',
    'filter.gk':          'Gardiens',
    'filter.def':         'Défenseurs',
    'filter.mid':         'Milieux',
    'filter.fwd':         'Attaquants',
    'search.teams':       'Rechercher une équipe...',
    'search.players':     'Rechercher un joueur...',
  },

  en: {
    /* Announce bar */
    'announce':           '🔔 Talent Detection 2026 — <a href="#club">Registrations open</a>',

    /* Nav */
    'nav.home':           'Home',
    'nav.news':           'News',
    'nav.team':           'Team',
    'nav.players':        'Players',
    'nav.results':        'Results',
    'nav.club':           'Club',
    'nav.contact':        'Contact',
    'nav.join':           'Join Us',

    /* Hero */
    'hero.season':        '⚽ Season 2025 / 2026',
    'hero.title':         'TOGETHER<br /><em>WE GO</em><br />FURTHER',
    'hero.subtitle':      'Football Club · Training Centre · Talent Detection',
    'hero.cta1':          '▶ Watch highlights',
    'hero.cta2':          'Upcoming matches',
    'hero.badge':         'SPORTS UNION<br />OF THE DIASPORA',
    'hero.last':          'Last result',
    'hero.next':          'Next match',
    'hero.champ':         'Championship',
    'hero.champ.sub':     'Ligue 1 Côte d\'Ivoire',
    'hero.ticket':        'Tickets →',

    /* News */
    'news.heading':       'News',
    'news.viewall':       'View all →',
    'tab.all':            'All',
    'tab.match':          'Match',
    'tab.club':           'Club',
    'tab.academy':        'Academy',
    'tab.gallery':        'Gallery',
    'news.featured.title':'USDI FC 3 – 1 AS Tanda: A character win',
    'news.featured.meta': '10 May 2026 · 5 min read',

    /* Sidebar */
    'sidebar.next':       'NEXT MATCH',
    'sidebar.ticket':     'Tickets',
    'sidebar.standings':  'STANDINGS',
    'sidebar.join.title': 'JOIN THE CLUB',
    'sidebar.join.text':  'Training centre open. Talent detection available for all profiles.',
    'sidebar.apply':      'Apply now →',

    /* Stats */
    'stat.matches':       'Matches played',
    'stat.wins':          'Victories',
    'stat.goals':         'Goals scored',
    'stat.members':       'Members',
    'stat.trophies':      'Trophies',

    /* Fixtures */
    'fixtures.heading':   'Results & <span>Matches</span>',
    'fixtures.all':       'All fixtures →',

    /* Spotlight */
    'spotlight.eye':      'Player of the month',
    'spotlight.detail':   'Forward · #9 · 18 goals this season',

    /* Players */
    'players.heading':    'Player <span>Spotlight</span>',
    'players.all':        'View full squad →',

    /* Club */
    'club.eyebrow':       'Who We Are',
    'club.title':         'A club built on<br /><em>Opportunity</em>',
    'club.p1':            'Founded in Côte d\'Ivoire, USDI FC was created to give gifted young footballers a genuine chance — a professional environment, top-level coaching, and a clear pathway to a career in football.',
    'club.p2':            'We believe talent is everywhere. Our mission is to find it, develop it, and bring it to the world stage.',
    'club.stat.teams':    'Teams',
    'club.stat.players':  'Players',
    'club.stat.founded':  'Founded',
    'club.p1.title':      'Talent Detection',
    'club.p1.text':       'Identifying raw talent across all regions through regular scouting tours and open trials.',
    'club.p2.title':      'Professional Training',
    'club.p2.text':       'Players receive structured daily training programmes designed by UEFA-certified coaches.',
    'club.p3.title':      'Career Pathways',
    'club.p3.text':       'Building bridges between local talent and football clubs across Africa and Europe.',
    'club.p4.title':      'Community & Diaspora',
    'club.p4.text':       'Uniting the diaspora through shared passion, investment, and pride in homegrown talent.',

    /* Newsletter */
    'newsletter.title':   'STAY CONNECTED · USDI FC NEWSLETTER',
    'newsletter.sub':     'Receive club news, results and events directly in your inbox.',
    'newsletter.input':   'your@email.com',
    'newsletter.btn':     'Subscribe →',

    /* Partners */
    'partners.heading':   'Our <span>Partners</span>',

    /* Footer */
    'footer.brand':       'Football club and training centre — building tomorrow\'s champions from Côte d\'Ivoire. Together, we go further.',
    'footer.col1':        'Club',
    'footer.about':       'About',
    'footer.teams':       'Our Teams',
    'footer.players':     'Players',
    'footer.academy':     'Academy',
    'footer.staff':       'Coaching Staff',
    'footer.col2':        'News',
    'footer.latest':      'Latest News',
    'footer.results':     'Results',
    'footer.reports':     'Match Reports',
    'footer.gallery':     'Video Gallery',
    'footer.col3':        'Contact',
    'footer.sponsor':     'Sponsorship',
    'footer.trials':      'Trial Info',
    'footer.media':       'Media Enquiries',
    'footer.partner':     'Partner With Us',
    'footer.copy':        '© 2026 USDI FC — Union Sportive de la Diaspora. All rights reserved.',
    'footer.legal':       'Legal Notice',
    'footer.privacy':     'Privacy Policy',

    /* Other pages */
    'page.teams.title':   'Our <span>Teams</span>',
    'page.teams.sub':     'All USDI FC squads — from senior side to the academy',
    'page.players.title': 'Our <span>Players</span>',
    'page.players.sub':   'Meet the talent powering USDI FC',
    'filter.all':         'All',
    'filter.senior':      'Senior',
    'filter.youth':       'Youth',
    'filter.academy':     'Academy',
    'filter.gk':          'Goalkeepers',
    'filter.def':         'Defenders',
    'filter.mid':         'Midfielders',
    'filter.fwd':         'Forwards',
    'search.teams':       'Search teams...',
    'search.players':     'Search players...',
  }
};

/* ── Core apply function ── */
function applyLang(lang) {
  const t = T[lang];
  if (!t) return;

  /* plain text */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (t[k] !== undefined) el.textContent = t[k];
  });

  /* inner HTML (bold, em, links, spans) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.dataset.i18nHtml;
    if (t[k] !== undefined) el.innerHTML = t[k];
  });

  /* input placeholders */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.dataset.i18nPh;
    if (t[k] !== undefined) el.placeholder = t[k];
  });

  /* html lang attribute */
  document.documentElement.lang = lang;

  /* switcher button highlight */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* persist */
  localStorage.setItem('usdilang', lang);
}

function setLang(lang) { applyLang(lang); }

/* ── Boot on DOM ready ── */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(localStorage.getItem('usdilang') || 'fr');
});
