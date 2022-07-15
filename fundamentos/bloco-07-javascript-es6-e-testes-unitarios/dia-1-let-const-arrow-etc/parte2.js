function fatorial(numero) {
  let fatorial = numero;
  for (let index = fatorial - 1; index > 0; index -= 1) {
    fatorial *= index;
  }
  return fatorial;
}

// console.log(fatorial(4));

function maiorPalavra(string) {
  const palavras = string.split(' ');
  let maior = palavras[0];
  for (index of palavras) {
    if (index.length > maior.length) {
      maior = index;
    }
  }
  return maior;
}

// console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu naquela noite'));

function substituiX(nome) {
  const frase = 'Tryber x aqui!';
  const verifica = frase.split(' ');
  let novaFrase = '';
  for (let index = 0; index < verifica.length; index += 1) {
    if (verifica[index] === 'x') {
      verifica[index] = nome;
    }
    novaFrase = verifica.join(' ');
  }
  return novaFrase;
}

console.log(substituiX('victor'));
