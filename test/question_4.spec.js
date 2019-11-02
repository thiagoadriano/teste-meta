const { expect } = require('chai');
const question = require('./../src/question_4');

describe('Questão 4', () => {
  it('Deve garantir a chamada da função', () => {
    expect(question()).to.null;
  });
});
