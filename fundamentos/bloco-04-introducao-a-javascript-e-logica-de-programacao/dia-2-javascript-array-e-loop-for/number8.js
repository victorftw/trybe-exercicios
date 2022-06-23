// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
// 1 - Criar um array vazio;
// 2 - Criar um loop que percorra do numero 1 até 25;
// 3 - Adicionar cada número obtido pelo loop dentro do array com array.push();
// 4 - Imprimir o array com console.log();

let array = [];

for (let index = 1; index <= 25; index += 1) {
  array.push(index);
}

console.log(array);
