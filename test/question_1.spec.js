const { expect } = require('chai');
const question = require('./../src/question_1');

describe('Questão 1 - validações', () => {
  it('Deve garantir a chamada da função sem valores retorne falso', () => {
    expect(question()).to.false;
  });

  it('Deve garantir que o alvo inválido não tenha o cálculo', () =>{
    expect(question('valor', [1,2,3])).to.false;
    expect(question(0, [1,2,3])).to.false;
    expect(question([], [1,2,3])).to.false;
 });

  it('Deve garantir que a lista inválida não tenha o cálculo', () =>{
    expect(question(3, [])).to.false;
    expect(question(3, null)).to.false;
    expect(question(3, 'valor')).to.false;
    expect(question(3, [1, 13, '50', 8])).to.false;
  });
});


describe('Questão 1 - teste valores', () => {
  it('Deve garantir um array vazio para o alvo 3', () => {
    let ints = [10, 23, 52, 45, 83];
    let alvo = 3;
    expect(question(alvo, ints)).to.eql([]);
  });

  it('Deve garantir um array com os indices 3 e 4 para o alvo 8', () => {
     let ints = [0, 3, 2, 5, 3, 8, 5];
     let alvo = 8;
     expect(question(alvo, ints)).eql([3, 4]);
  });

  it('Deve garantir um array com os indices 2,3, 6,7 e 10,11 para o alvo 15', () => {
    let ints = [0, 8, 5,10, 8,25, 14,1, 25,30, 7,8];
    let alvo = 15;
    expect(question(alvo, ints)).eql([2,3, 6,7, 10,11]);
  });
});
