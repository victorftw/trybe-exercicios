// 4° - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array) {
  let nome = array[0];
  for (index in array) {
    if (array[index].length > nome.length) {
      nome = array[index];
    }
  }
  return nome;
}

console.log(maiorNome(array));
