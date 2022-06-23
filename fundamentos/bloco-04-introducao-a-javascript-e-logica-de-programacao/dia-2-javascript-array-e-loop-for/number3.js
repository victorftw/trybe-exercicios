// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// 1 - Adicionar o array;
// 2 - Criar uma variável com valor 0;
// 3 - Criar uma variável que receba a quantidade de itens do array (nomeVariavel.length);
// 4 - Criar um loop que percorre o array;
// 5 - Incrementar a variável (da soma) com o valor correspondente a cada loop;
// 6 - Imprimir a variável (da soma) dividida com a variável da quantidade de itens do array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let arit = numbers.length;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

console.log(sum / arit);
