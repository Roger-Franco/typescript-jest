import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks()); // Limpa cada vez que faz testes
  it('Should return undefined', () => {
    // Sytem under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('Should call console.log once', () => {
    // Sytem under test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call console.log with "Pedido salvo com sucesso..."', () => {
    // Sytem under test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});

// describe('testando alguma coisa', () => {
//   it('descrição do teste (IT)', () => {
//     const number = 1;
//     expect(number).toBe(1);
//   });
//   test('descrição do teste (TEST)', () => {
//     const nome = 'Roger';
//     expect(nome).toBe('Roger');
//   });
// });
