// 6° - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somaTotal(numero) {
  let numeros = [];
  let soma = 0;
  for (let index = 1; index <= numero; index += 1) {
    numeros.push(index);
  }
  for (num of numeros) {
    soma += num;
  }
  return soma;
}

console.log(somaTotal(5));
