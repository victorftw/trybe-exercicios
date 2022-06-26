// 1° - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(palavra) {
  let reverse = palavra.split('').reverse().join('');
  if (reverse === palavra) {
    console.log(true);
  } else {
    console.log(false);
  }
}

verificaPalindrome('arara');

// let frase = 'pneumoultramicroscopicossilicovulcanoconiótico';

// // O método split('') separa as letras e os transforma em um array.
// let fraseComSplit = frase.split('');
// console.log(fraseComSplit);
// // O método reverse() inverte o array de trás pra frente, começando do último indice até o primeiro ([0]).
// let fraseComReverse = fraseComSplit.reverse();
// console.log(fraseComReverse);
// // O método join('') pega o array, junta as palavras e as transforma em string.
// let fraseComJoin = fraseComReverse.join('');
// console.log(fraseComJoin);
