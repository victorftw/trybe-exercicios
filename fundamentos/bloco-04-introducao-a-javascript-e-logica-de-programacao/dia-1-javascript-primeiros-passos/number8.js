const n1 = 2;
const n2 = 5;
const n3 = 27;

//🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

// let result = (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) ? console.log(true):console.log(false);

let isEven = false;

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
  isEven = true;
}
console.log(isEven);
