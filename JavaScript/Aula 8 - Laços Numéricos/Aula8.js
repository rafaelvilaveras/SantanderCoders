// LAÇO NUMÉRICO: FOR

const input = require('readline-sync');

// Acumulador 

let acumulador = 0;

acumulador = acumulador + 10;

acumulador += 2;

acumulador++;

// Estrutura for

let nota;
let soma = 0;

for(let i = 0; i < 3; i++) {
  nota = Number(input.question(`Informe a nota ${i} do aluno: `));

  soma += nota;
}

console.log(`A média do aluno é ${soma/3}`);