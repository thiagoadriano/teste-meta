const { expect } = require('chai');
const question = require('./../src/question_4');

describe('Questão 4 - validações', () => {
  it('Deve garantir a chamada da função sem valores retorne falso', () => {
    expect(question()).to.false;
  });

  it('Deve garantir que não vai ser feito cálculo com valor diferente de número', () =>{
    expect(question(['1',2,3])).to.false;
    expect(question([])).to.false;
    expect(question([2, {}, '3'])).to.false;
 });
});

describe('Questão 4 - teste valores', () => {
  it('Deve garantir que retorne 1 para [0,1,0,1]', () => {
    expect(question([0,1,0,1])).to.equal(1);
  });

  it('Deve garantir que retorne 5 para [0,5,0,5]', () => {
    expect(question([0,5,0,5])).to.equal(5);
  });

  it('Deve garantir que retorne 6 para [0,1,0,2,1,0,1,3,2,1,2,1]', () => {
    expect(question([0,1,0,2,1,0,1,3,2,1,2,1])).to.equal(6);
  });

  it('Deve garantir que retorne 9 para [0,1,0,3,1,0,1,4,2,1,3,1]', () => {
    expect(question([0,1,0,3,1,0,1,4,2,1,3,1])).to.equal(9);
  });

  it('Deve garantir que retorne 8 para [1,1,1,3,1,0,1,4,2,1,3,1]', () => {
    expect(question([1,1,1,3,1,0,1,4,2,1,3,1])).to.equal(8);
  });


});

