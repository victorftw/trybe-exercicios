// 3° - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let array = [2, 4, 6, 7, 10, 0, -3];

function indiceDoMenor(array) {
  let indiceMenor = 0;
  for (indice in array) {
    if (array[indiceMenor] > array[indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}

console.log(indiceDoMenor(array));
