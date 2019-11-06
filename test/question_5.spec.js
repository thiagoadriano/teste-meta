const { expect } = require('chai');
const question = require('../src/question_5');

let registros = [
  { data: '2019-10-01', hora: '08:01', funcionario: 'João' },
  { data: '2019-10-01', hora: '07:56', funcionario: 'Maria' },
  { data: '2019-10-01', hora: '12:02', funcionario: 'João' },
  { data: '2019-10-01', hora: '12:01', funcionario: 'Maria' },
  { data: '2019-10-01', hora: '13:01', funcionario: 'João' },
  { data: '2019-10-01', hora: '12:59', funcionario: 'Maria' },
  { data: '2019-10-01', hora: '18:02', funcionario: 'João' },
  { data: '2019-10-01', hora: '17:58', funcionario: 'Maria' },
  { data: '2019-10-02', hora: '08:09', funcionario: 'João' },
  { data: '2019-10-02', hora: '12:01', funcionario: 'João' },
  { data: '2019-10-02', hora: '12:54', funcionario: 'João' },
  { data: '2019-10-02', hora: '12:58', funcionario: 'Maria' },
  { data: '2019-10-02', hora: '18:02', funcionario: 'João' },
  { data: '2019-10-02', hora: '18:30', funcionario: 'Maria' }
];

let questionResult = null;

beforeEach(() => {
  questionResult = question(registros);
});

describe('Questão 5 Extra - validações', () => {
  it('Deve garantir a chamada da função sem valores retorne "Invalid List"', () => {
    expect(question()).to.equal('Invalid List');
  });

  it('Deve garantir que retorne "Invalid List" quando array vazio', () => {
    expect(question([])).to.equal('Invalid List');
  });
});

describe('Questão 5 Extra - Teste de valores', () => {
  it('Deve garantir que teve retorno de dados', () => {
    expect(questionResult.length).to.equal(4);
  });

  it('Deve garantir que teve dois resultados para MARIA', () => {
    let pessoas = questionResult.filter(x => x.funcionario === 'Maria');
    expect(pessoas.length).to.equal(2);
  });

  it('Deve garantir que teve dois resultados para JOÃO', () => {
    let pessoas = questionResult.filter(x => x.funcionario === 'João');
    expect(pessoas.length).to.equal(2);
  });

  it('Deve garantir que o retorno para MARIA no dia "2019-10-01" foi "09:04"', () => {
    let pessoa = questionResult.find(x => x.funcionario === 'Maria' && x.data === '2019-10-01');
    expect(pessoa.total).to.equal('09:04');
  });

  it('Deve garantir que o retorno para MARIA no dia "2019-10-02" foi "05:32"', () => {
    let pessoa = questionResult.find(x => x.funcionario === 'Maria' && x.data === '2019-10-02');
    expect(pessoa.total).to.equal('05:32');
  });

  it('Deve garantir que o retorno para JOÃO no dia "2019-10-01" foi "09:02"', () => {
    let pessoa = questionResult.find(x => x.funcionario === 'João' && x.data === '2019-10-01');
    expect(pessoa.total).to.equal('09:02');
  });

  it('Deve garantir que o retorno para JOÃO no dia "2019-10-02" foi "09:00"', () => {
    let pessoa = questionResult.find(x => x.funcionario === 'João' && x.data === '2019-10-02');
    expect(pessoa.total).to.equal('09:00');
  });

  it('Deve garantir que o retorno está na ordem JOÃO e MARIA', () => {
    let pessoas = questionResult.reduce((mount, current) => mount.add(current.funcionario), new Set());
    expect( Array.from(pessoas.values()) ).to.eql([ 'João', 'Maria' ]);
  });

});
