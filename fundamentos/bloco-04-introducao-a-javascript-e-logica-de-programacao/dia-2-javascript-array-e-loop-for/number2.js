// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// 1 - Adicionar o array;
// 2 - Criar uma variável com valor 0;
// 3 - Criar um loop que percorre o array;
// 4 - Incrementar a variável com o valor correspondente a cada loop;
// 5 - Imprimir a variável;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
console.log(sum);
