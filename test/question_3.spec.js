const { expect } = require('chai');
const question = require('./../src/question_3');

describe('Questão 3 - validações', () => {
  it('Deve garantir a chamada da função', () => {
    expect(question()).to.equal('Invalid List');
  });

  it('Deve garantir que a lista só tanha números', () => {
    expect(question([1,2.3,3,{}])).to.equal('Invalid List');
  });

  it('Deve garantir que a lista não está vazia', () => {
    expect(question([])).to.equal('Invalid List');
  });
});

describe('Questão 3 - teste valores', () => {
  it('Deve garantir a venda para [7,1,5,3,6,4] com lucro 5', () => {
    let result = question([7,1,5,3,6,4]);
    expect(result).to.include(5);
    expect(result).to.equal('5 (Comprou no dia 2 (preço igual a 1) e vendeu no dia 5 (preço igual a 6), lucro foi de 6 – 1 = 5');
  });

  it('Deve garantir que não teve venda para [7,6,4,3,1]', () => {
    let result = question([7,6,4,3,1]);
    expect(result).to.include(0);
    expect(result).to.equal('0 (Nesse caso nenhuma transação deve ser feita, lucro máximo igual a 0)');
  });

  it('Deve garantir a venda para [7,6,1,4,3] com lucro 3', () => {
    let result = question([7,6,1,4,3]);
    expect(result).to.include(3);
    expect(result).to.equal('3 (Comprou no dia 3 (preço igual a 1) e vendeu no dia 4 (preço igual a 4), lucro foi de 4 – 1 = 3');
  });

  it('Deve garantir a venda para [7,6,2,4,3,8,12] com lucro 10', () => {
    let result = question([7,6,2,4,3,8,12]);
    expect(result).to.include(10);
    expect(result).to.equal('10 (Comprou no dia 3 (preço igual a 2) e vendeu no dia 7 (preço igual a 12), lucro foi de 12 – 2 = 10');
  });

  it('Deve garantir que não teve venda para [7,6,4,3,1,1,1]', () => {
    let result = question([7,6,4,3,1,1,1]);
    expect(result).to.include(0);
    expect(result).to.equal('0 (Nesse caso nenhuma transação deve ser feita, lucro máximo igual a 0)');
  });
});
