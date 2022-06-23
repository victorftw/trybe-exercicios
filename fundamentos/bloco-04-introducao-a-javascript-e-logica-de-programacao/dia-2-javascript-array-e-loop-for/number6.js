// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// 1 - Adicionar o array;
// 2 - Criar uma variável  Odd com valor 0;
// 3 - Criar um loop que percorre o array;
// 4 - Criar um if com a condição do restante da divisão index por 2 não for 0; Se não for, a variavel Odd recebe +=1;
// 5 - Criar um if com a condição do valor da Odd ser IGUAL à 0; Se for, console.log('Nenhum valor ímpar foi encontrado.');
// 6 - Caso não obedeça a condição; Imprimir a mensagem "'Foram encontrados', odd + ' números ímpares.';

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let odd = 0;

for (let number of numbers) {
  if (number % 2 !== 0) {
    odd += 1;
  }
}

if (odd === 0) {
  console.log('Nenhum valor ímpar foi encontrado.');
} else {
  console.log('Foram encontrados', odd + ' números ímpares.');
}
