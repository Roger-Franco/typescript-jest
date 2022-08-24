describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;
    // expect(number).toBe(10);
    // expect(number).not.toBeNull();
    // expect(number).toBeNull();
    // expect(number).toBeTruthy();
    expect(number).toBeGreaterThanOrEqual(10);
    // expect(number).toEqual(10); // => "toEqual" para objetos
    expect(number).toHaveProperty('toFixed');
  });
  it('should split tests', () => {
    const number = 10;
    expect(number).toBe(10);
    // expect(number).not.toBeNull();
    // expect(number).toBeNull();
    // expect(number).toBeTruthy();
    // expect(number).toBeGreaterThanOrEqual(10);
    // expect(number).toEqual(10); // => "toEqual" para objetos
    // expect(number).toHaveProperty('toFixed');
  });
});

// describe('Objects values', () => {
//   it('should test jest assertions with objects', () => {
//     const person = { name: 'Roger', age: 42 };
//     const person2 = { name: 'Roger', age: 42 };
//     const person3 = { ...person };

//     expect(person).toEqual(person2); // => "toEqual" para objetos
//     // expect(person).toBe(person2);
//     // expect(number).not.toBeNull();
//     // expect(number).toBeNull();
//     // expect(number).toBeTruthy();
//     // expect(number).toBeGreaterThanOrEqual(10);
//     expect(person).toHaveProperty('age', 42);
//     // expect(person).toHaveProperty('age', 41);
//     expect(person.name).toBe('Roger');
//   });
// });
