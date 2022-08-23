describe('testando alguma coisa', () => {
  it('descrição do teste (IT)', () => {
    const number = 1;
    expect(number).toBe(1);
  });
  test('descrição do teste (TEST)', () => {
    const nome = 'Roger';
    expect(nome).toBe('Roger');
  });
});

it('descrição do teste (IT)', () => {
  const number = 1;
  expect(number).not.toBe(1);
});
test('descrição do teste (TEST)', () => {
  const nome = 'Roger';
  expect(nome).not.toBe('Roger');
});
