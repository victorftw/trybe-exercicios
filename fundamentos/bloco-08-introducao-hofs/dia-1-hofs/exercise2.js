const resultado = (num, callback) => {
  let numAleat = Math.floor(Math.random() * 5 + 1);
  return verifica(num, numAleat);
};

const verifica = (numero, numAleat) =>
  numero === numAleat ? 'Parabéns você ganhou' : 'Tente novamente';

console.log(resultado(3, verifica));
