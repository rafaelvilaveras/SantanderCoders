// FUNÇOES

// Definição da função

function saudacao() {
  console.log(`Olá, seja bem vindo!`);
}

saudacao();

console.clear();

// Parâmetros da função

function saudacao(nome, curso='JavaScript') {
  console.log(`Olá ${nome}, seja bem vindo ao curso de ${curso}!`);
}

saudacao('Rafael', 'HTML');

console.clear();

// Retorno da função

function soma(x, y) {
  return x + y;
}

const resultado = soma(2, 4);

console.log(resultado);

console.clear();

function maiorQue50(num) {
  // if(Number(num) > 50){
  //   return true;
  // } 

  // return false;
  
  return Number(num) > 50 ? true : false;
}

console.log(maiorQue50(51));