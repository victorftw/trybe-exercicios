// 2º - Crie uma função que receba um array de inteiros e retorne o índice do maior valor. 

let array = [2, 3, 6, 7, 10, 1];

function indiceDoMaior(array) {
  let indiceMaior = 0;
  for (indice in array) {
    if (array[indiceMaior] < array[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}

console.log(indiceDoMaior(array));
