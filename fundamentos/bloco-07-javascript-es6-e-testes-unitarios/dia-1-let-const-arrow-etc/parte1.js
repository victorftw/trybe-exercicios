const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!'`;
    console.log(ifScope);
  } else {
    const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope((false));

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const resultado = (a, b) => (a - b);

const ordenaNumeros = (array) => {
  let ordenados = array.sort(resultado)
  console.log(`Os números ${ordenados} se encontram ordenados de forma crescente!`);
}

ordenaNumeros(oddsAndEvens);