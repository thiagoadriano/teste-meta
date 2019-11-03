function isValidInput(input) {
  let pattern = /[^\[\]\(\)\{\}]/g;
  return typeof input === 'string' &&
         input.length > 0  &&
         input.length % 2 === 0 &&
         !pattern.test(input);
}

function caseCloseBrackets(bracketOpenString) {
  switch(bracketOpenString) {
    case '{':
      return '}';
    case '[':
      return ']';
    case '(':
      return ')';
    default:
      return '';
  }
}

function testValue(input) {
  let totalString = input.length;
  let run = totalString / 2;

  for (let i = 0; i < run; i++) {
    let first = input[i];
    let last = input[totalString - (i + 1)];
    let closeBracket = caseCloseBrackets(first);

    if (last !== closeBracket) {
      return false;
    }
  }

  return true;
}

function Main(input = '') {
  if(!isValidInput(input)) {
    return 'String Inválida';
  }

  return testValue(input) ? 'SIM' : 'NAO';
}

module.exports = Main;
