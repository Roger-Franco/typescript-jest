import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks()); // Limpa cada vez que faz testes
  it('Should return undefined', () => {
    // Sytem under test
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('Should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call console.log with "Mensagem enviada:" and "msg"', () => {
    // Sytem under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });
});
