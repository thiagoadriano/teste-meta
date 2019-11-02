function isValidAlvo(alvo) {
  return !Number.isNaN(alvo) && alvo > 0;
}

function isValidList(list) {
  return Array.isArray(list) && list.length;
}

function calculate(alvo, list) {
  let indices = [];
  let total = list.length;

  for (let i = 0; i < total; i++) {
    let calc = list[i] + list[i + 1];
    if (!Number.isNaN(calc) && calc === alvo) {
      indices.push(i, i + 1);
    }
  }

  return indices;
}

function Main(alvo = 0, list = []) {
  if(!isValidAlvo(alvo) || !isValidList(list)) {
    return false;
  }
  return calculate(alvo, list);
}

module.exports = Main;
