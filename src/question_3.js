function isValidList(list) {
  let invalid = list.some(x => typeof x !== 'number');
  return Array.isArray(list) && list.length && !invalid;
}

function seachValues(list) {
  let min = Math.min(...list);
  let indexMin = list.findIndex(item => item === min);
  let listNew = list.slice(indexMin);
  let max = Math.max(...listNew);
  let indexmax = list.findIndex(item => item === max);

  return {min, dayMin: indexMin + 1, max, dayMax: indexmax + 1};
}

function msgSale(min, dayMin, max, dayMax) {
  let profit = max - min;
  return `${profit} (Comprou no dia ${dayMin} (preço igual a ${min}) e vendeu no dia ${dayMax} (preço igual a ${max}), lucro foi de ${max} – ${min} = ${profit}`;
}

function msgNotSale() {
  return '0 (Nesse caso nenhuma transação deve ser feita, lucro máximo igual a 0)';
}

function Main(list = []) {
  if (!isValidList(list)) {
    return 'Invalid List';
  }

  let {min, dayMin, max, dayMax} = seachValues(list);

  if (min !== max) {
    return msgSale(min, dayMin, max, dayMax);
  }

  return msgNotSale();
}

module.exports = Main;
