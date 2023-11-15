// LAÇOS CONDICIONAIS

const max = 5
const numero_sorteado = Math.round(Math.random() * max);

const input = require('readline-sync');

// console.log(numero_sorteado)

let num = Number(input.question('Escolha um numero de 0 ate ' + max +':'));


while(num !== numero_sorteado) {
  num = Number(input.question('Escolha um numero de 0 ate ' + max +':'));
}
