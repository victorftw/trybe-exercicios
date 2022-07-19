const { sum, myRemove, myFizzBuzz, encode, decode } = require('./funcoes');

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

describe('Testes da função myRemove', () => {
  test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Testes da função myFizzBuzz', () => {
  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('')).toBe(false);
  });
});

describe('Testes das funções encode e decode', () => {
  test('Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });

  test('Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(encode('a b c d e f g h i j k l m n o p q r s t u v w x y z')).toBe(
      '1 b c d 2 f g h 3 j k l m n 4 p q r s t 5 v w x y z'
    );
    expect(decode('1, 2, 3, 4, 5, 6, 7, 8, 9, 0')).toBe(
      'a, e, i, o, u, 6, 7, 8, 9, 0'
    );
  });

  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('trybe').length).toEqual(5);
    expect(decode('tryb2').length).toEqual(5);
  });
});
