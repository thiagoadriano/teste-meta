function isValidAlvo(alvo) {
  return Number.isInteger(alvo) && alvo > 0;
}

function isValidList(list) {
  if (Array.isArray(list)) {
    let invalid = list.some(x => !Number.isInteger(x));
    return list.length && !invalid;
  }
  return false;
}

function calculate(alvo, list) {
  let indices = [];
  let total = list.length;

  for (let i = 0; i < total; i++) {
    let calc = list[i] + list[i + 1];
    if (calc === alvo) {
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
