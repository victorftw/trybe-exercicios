const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
};

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(string) {
  let texto = string.split('');
  const dicionario = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let index = 0; index < texto.length; index += 1) {
    let letraAtual = texto[index];
    let resultado = dicionario[letraAtual];
    if (resultado) {
      texto[index] = resultado;
    }
  }

  let TextoEncode = texto.join('');
  return TextoEncode;
}

function decode(string) {
  let texto = string.split('');
  const dicionario = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let index = 0; index < texto.length; index += 1) {
    let letraAtual = texto[index];
    let resultado = dicionario[letraAtual];
    if (resultado) {
      texto[index] = resultado;
    }
  }

  let TextoDecode = texto.join('');
  return TextoDecode;
}

function techList(array, name) {
  if (array.length === 0) return 'Vazio!';

  const tecnologias = array.sort();
  const obj = [];

  for (let index of tecnologias) {
    obj.push({
      tech: index,
      name: name,
    });
  }
  return obj;
}

function hydrate(texto) {
  const somenteNumeros = texto.replace(/[^0-9]/g, '');
  const arrayNumeros = somenteNumeros.split('');
  let soma = 0;
  for (let index of arrayNumeros) {
    let num = Number(index);
    soma += num;
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate };
