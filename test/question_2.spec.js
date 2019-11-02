const { expect } = require('chai');
const question = require('./../src/question_2');

describe('Questão 2', () => {
  it('Deve garantir a chamada da função', () => {
    expect(question()).to.null;
  });
});
