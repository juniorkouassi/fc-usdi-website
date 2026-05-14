function teamCardHTML(team) {
  const banner = team.photo
    ? `<div class="team-card-banner" style="background:url('${team.photo}') center/cover no-repeat"></div>`
    : `<div class="team-card-banner" style="background:linear-gradient(135deg,${team.color}22,${team.color}44)">
         <span style="font-size:3.5rem">${team.emoji}</span>
       </div>`;
  return `
    <div class="team-card" onclick="location.href='teams.html'">
      ${banner}
      <div class="team-card-body">
        <div class="team-cat">${team.category.charAt(0).toUpperCase()+team.category.slice(1)} · ${team.league}</div>
        <h3>${team.name}</h3>
        <div class="team-record">
          <span class="rec-w">W${team.wins}</span>
          <span class="rec-d">D${team.draws}</span>
          <span class="rec-l">L${team.losses}</span>
        </div>
      </div>
    </div>
  `;
}

function playerCardHTML(player) {
  const imgContent = player.photo
    ? `<div class="player-card-img" style="background:url('${player.photo}') center/cover no-repeat">
         <span class="player-card-num">#${player.number}</span>
       </div>`
    : `<div class="player-card-img">
         <span>${player.emoji}</span>
         <span class="player-card-num">#${player.number}</span>
       </div>`;
  return `
    <div class="player-card" onclick="location.href='player.html?id=${player.id}'">
      ${imgContent}
      <div class="player-card-body">
        <span class="player-pos-tag pos-${player.position}">${player.position}</span>
        <h3>${player.name}</h3>
        <div class="player-team">${player.team}</div>
        <div class="player-card-stats">
          <div class="pcs"><div class="v">${player.stats.goals}</div><div class="l">Goals</div></div>
          <div class="pcs"><div class="v">${player.stats.assists}</div><div class="l">Assists</div></div>
          <div class="pcs"><div class="v">${player.stats.rating}</div><div class="l">Rating</div></div>
        </div>
      </div>
    </div>
  `;
}
