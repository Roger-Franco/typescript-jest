import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks()); // Limpa cada vez que faz testes

describe('IndividualCustomer', () => {
  it('Should have firstname, lastName and cpf', () => {
    const sut = createIndividualCustomer('Roger', 'Franco', '222.333');
    expect(sut).toHaveProperty('firstName', 'Roger');
    expect(sut).toHaveProperty('lastName', 'Franco');
    expect(sut).toHaveProperty('cpf', '222.333');
  });

  it('Should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Roger', 'Franco', '222.333');
    expect(sut.getName()).toBe('Roger Franco');
    expect(sut.getIDN()).toBe('222.333');
  });
});

describe('EnterpriseCustomer', () => {
  it('Should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('RogerBenZoe', '222.333');
    expect(sut).toHaveProperty('name', 'RogerBenZoe');
    expect(sut).toHaveProperty('cnpj', '222.333');
  });

  it('Should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('RogerBenZoe', '222');
    expect(sut.getName()).toBe('RogerBenZoe');
    expect(sut.getIDN()).toBe('222');
  });
});
