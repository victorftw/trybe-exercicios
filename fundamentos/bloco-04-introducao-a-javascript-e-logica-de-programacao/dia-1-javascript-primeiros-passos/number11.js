let salarioBruto = 3000;
let salarioLiq;
let salarioBase;
let inss;
let valorImp;
let impRenda;

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
  console.log('Salário bruto até R$ 1.556,94: alíquota de 8%');
  inss = salarioBruto * 0.08;
  salarioBase = salarioBruto - inss;
  console.log(
    'Seu salário com o INSS descontado é de R$',
    salarioBase.toFixed(2)
  );
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  console.log('Salário bruto de R$ 1.556,94 a R$ 2.594,92: alíquota de 9%');
  inss = salarioBruto * 0.09;
  salarioBase = salarioBruto - inss;
  console.log(
    'Seu salário com o INSS descontado é de R$',
    salarioBase.toFixed(2)
  );
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  console.log('Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%');
  inss = salarioBruto * 0.11;
  salarioBase = salarioBruto - inss;
  console.log(
    'Seu salário com o INSS descontado é de R$',
    salarioBase.toFixed(2)
  );
} else if (salarioBruto > 5189.82) {
  console.log(
    'Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88'
  );
  inss = 570.88;
  salarioBase = salarioBruto - inss;
  console.log(
    'Seu salário com o INSS descontado é de R$',
    salarioBase.toFixed(2)
  );
} else {
  console.log('Erro: Valor inesperado');
}

console.log('-------------------------------------------------------------');

if (salarioBase > 0 && salarioBase <= 1903.98) {
  console.log('Isento de posto de renda');
  salarioLiq = salarioBase;
  console.log('Seu salário é de R$', salarioLiq);
} else if (salarioBase >= 1903.98 && salarioBase <= 2826.65) {
  console.log(
    'Sálario de R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto'
  );
  impRenda = salarioBase * 0.075;
  valorImp = impRenda - 142.8;
  salarioLiq = salarioBase - valorImp;
  console.log(
    'Seu salário com o INSS e Imposto de Renda descontado é de R$',
    salarioLiq.toFixed(2)
  );
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  console.log(
    'Sálario de R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto'
  );
  impRenda = salarioBase * 0.15;
  valorImp = impRenda - 354.8;
  salarioLiq = salarioBase - valorImp;
  console.log(
    'Seu salário com o INSS e Imposto de Renda descontado é de R$',
    salarioLiq.toFixed(2)
  );
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  console.log(
    'Sálario de R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto'
  );
  impRenda = salarioBase * 0.225;
  valorImp = impRenda - 636.13;
  salarioLiq = salarioBase - valorImp;
  console.log(
    'Seu salário com o INSS e Imposto de Renda descontado é de R$',
    salarioLiq.toFixed(2)
  );
} else if (salarioBase > 4664.68) {
  console.log(
    'Sálario acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto'
  );
  impRenda = salarioBase * 0.275;
  valorImp = impRenda - 869.36;
  salarioLiq = salarioBase - valorImp;
  console.log(
    'Seu salário com o INSS e Imposto de Renda descontado é de R$',
    salarioLiq.toFixed(2)
  );
}
