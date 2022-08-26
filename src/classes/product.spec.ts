import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks()); // Limpa cada vez que faz testes
  it('Should have properties name and price', () => {
    const sut = createSut('Camiseta', 40.9);
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut).toHaveProperty('price', 40.9);
    expect(sut.price).toBeCloseTo(40.899);
  });
});
