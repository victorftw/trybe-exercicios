const valorCusto = 100;
const valorVenda = 500;
const imposto = valorCusto * 0.2;
const lucro = valorVenda - valorCusto;
const valorFinal = lucro * 1000;
if (valorCusto < 0 || valorVenda < 0) {
  console.log('Erro: Os valores não podem ser negativos.');
} else if (valorFinal < 0) {
  console.log('A empresa levou um prejuizo de ', valorFinal + 'reais.');
} else {
  console.log(
    'Ao vender mil produtos, a empresa terá: ',
    valorFinal + ' reais de lucro.'
  );
}
