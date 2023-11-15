// COERÇÃO (CONVERSÃO) DE TIPOS

// 1. Coerção Explícita (Manual)

const num = 10;

console.log(num, typeof num);

const numToString = String(num);

console.log(numToString, typeof numToString);
console.log(Number('1234'));
console.log(parseFloat('2312.01'));
console.log(parseInt('2312.61'));
console.log(Boolean(31231312)); // Qualquer conteúdo vai dar verdadeiro, apenas 0 vai ser falso

console.clear();

// 2. Coerção Implícita (Automática)

console.log(10 + 1);
console.log(10 + '1'); // Soma de número com texto sempre vai dar concatenação
console.log(10 - 1);
console.log(10 - '1'); // Em caso de subtração ele vai tentar subtrair primeiro, caso o texto não seja um número, mas carácteres, ele vai entregar o erro NaN ou Not a Number
console.log(10 * '3');
console.log(10 / '2');

// O mesmo acontece para as outras operações que não sejam de soma

