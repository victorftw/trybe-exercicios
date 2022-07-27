const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

const [ola, funcao] = saudacoes;

// funcao(ola);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida);
