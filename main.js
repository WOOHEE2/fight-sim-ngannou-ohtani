function startFight() {
  const ngannouAdj = document.getElementById('ngannouInput').value.trim();
  const ohtaniAdj = document.getElementById('ohtaniInput').value.trim();

  const resultDiv = document.getElementById('result');

  if (!ngannouAdj || !ohtaniAdj) {
    resultDiv.innerHTML = '⚠️ 두 캐릭터 모두 수식어를 입력해주세요.';
    return;
  }

  const winner = decideWinner(ngannouAdj, ohtaniAdj);

  resultDiv.innerHTML = `
    은가누: ${ngannouAdj}<br>
    오타니: ${ohtaniAdj}<br><br>
    🏆 승자: <strong>${winner}</strong>!
  `;
}

function decideWinner(adj1, adj2) {
  const score = (adj) => {
    let s = adj.length;
    if (adj.includes('불') || adj.includes('초사이어인')) s += 3;
    if (adj.includes('갑옷')) s += 2;
    if (adj.includes('피곤')) s -= 2;
    return s;
  };

  const score1 = score(adj1);
  const score2 = score(adj2);

  if (score1 > score2) return '은가누';
  else if (score2 > score1) return '오타니';
  else return '무승부';
}
