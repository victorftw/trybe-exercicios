// 5° - 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let array = [2, 3, 2, 5, 8, 2, 3, 4, 2, 7, 3, 9];

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

console.log(maisRepetido(array));
