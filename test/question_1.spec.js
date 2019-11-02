const { expect } = require('chai');
const question = require('./../src/question_1');

describe('Questão 1', () => {
 it('Deve garantir a chamada da função', () => {
   expect(question()).to.null;
 });
});
