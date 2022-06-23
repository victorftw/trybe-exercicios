// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// 1 - Adicionar o array;
// 2 - Criar uma variável com valor 0;
// 3 - Criar uma variável que receba a quantidade de itens do array (nomeVariavel.length);
// 4 - Criar um loop que percorre o array;
// 5 - Incrementar a variável (da soma) com o valor correspondente a cada loop;
// 6 - Criar uma variável que receba a divisão entre a var (da soma) com  a var de qtd de itens do array;
// 7 - Atribuir o resultado à essa variável.
// 8 - Criar um if com a condição da variável ser maior que 20;
// 9 - Caso a variável obedeça a condição; Imprimir 'Valor maior que 20'
// 10 - Caso não obedeça a condição; Imprimir a mensagem "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let arit = numbers.length;
let result;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

result = sum / arit;

if (result > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}
