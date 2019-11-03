const { expect } = require('chai');
const question = require('./../src/question_2');

describe('Questão 2 - validações', () => {
  it('Deve garantir a chamada da função', () => {
    expect(question()).to.equal('String Inválida');
  });

  it('Deve garantir que o parametro é uma string', () => {
    expect(question([])).to.equal('String Inválida');
    expect(question(2)).to.equal('String Inválida');
    expect(question(null)).to.equal('String Inválida');
    expect(question(undefined)).to.equal('String Inválida');
  });

  it('Deve garantir que NAO executa com uma string válida', () => {
    expect(question('(sdqe)')).to.equal('String Inválida');
  });
});

describe('Questão 2 - teste de valores', () => {
  it('Deve garantir que funcione com somente um bracket (), [] ou {} e retorne SIM', () => {
    expect(question('()')).to.equal('SIM');
    expect(question('[]')).to.equal('SIM');
    expect(question('{}')).to.equal('SIM');
  });
  it('Deve garantir que funcione com dois brackets ({}), [()] ou {[]} e retorne SIM', () => {
    expect(question('({})')).to.equal('SIM');
    expect(question('[()]')).to.equal('SIM');
    expect(question('{[]}')).to.equal('SIM');
    expect(question('{()}')).to.equal('SIM');
  });
  it('Deve garantir que funcione com três brackets ({[]}), [({})] ou {[()]} e retorne SIM', () => {
    expect(question('({[]})')).to.equal('SIM');
    expect(question('[({})]')).to.equal('SIM');
    expect(question('{[()]}')).to.equal('SIM');
  });
  it('Deve garantir que funcione com vários brackets e retorne SIM', () => {
    expect(question('{{[[(())]]}}')).to.equal('SIM');
  });
  it('Deve garantir que funcione com um bracket (} e retorne NAO', () => {
    expect(question('(}')).to.equal('NAO');
  });
  it('Deve garantir que funcione com dois brackets ({)} e retorne NAO', () => {
    expect(question('({)}')).to.equal('NAO');
  });
  it('Deve garantir que funcione com três brackets {[(])} e retorne NAO', () => {
    expect(question('{[(])}')).to.equal('NAO');
  });
});
