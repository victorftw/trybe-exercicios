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

console.log(decode('1 b c d 2 f g h 3 j k l m n 4 p q r s t 5 v w x y z'));

module.exports = { sum, myRemove, myFizzBuzz, encode, decode };
