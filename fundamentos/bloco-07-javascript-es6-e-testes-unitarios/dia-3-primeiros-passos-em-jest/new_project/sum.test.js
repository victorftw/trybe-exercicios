const { sum, myRemove } = require('./sum');

describe('Testes da função sum', () => {
  test('Verifica se sum(4, 5) retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Verifica se sum(0, 0) retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test(`Verifica se sum(4, '5') retorna erro`, () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});
