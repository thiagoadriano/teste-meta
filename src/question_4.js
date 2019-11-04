function isValidList(list) {
  if (Array.isArray(list)) {
    let invalid = list.some(x => !Number.isInteger(x));
    return list.length && !invalid;
  }
  return false;
}

function calculate(list) {
  let returnedCalc = 0;
  let total = list.length;

  for(let i = 0; i < total; i++) {
    let previous = list[i - 1],
        current = list[i];
    if (previous > current) {
      returnedCalc += previous - current;
    }
  }

  return returnedCalc;
}

function Main(list = []) {
  if(!isValidList(list)) {
    return false;
  }

  return calculate(list);
}

module.exports = Main;
