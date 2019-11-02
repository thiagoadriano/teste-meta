const { expect } = require('chai');
const question = require('./../src/question_3');
describe('Questão 3', () => {
  it('Deve garantir a chamada da função', () => {
    expect(question()).to.null;
  });
});
