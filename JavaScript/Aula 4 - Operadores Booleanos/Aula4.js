// OPERADORES BOOLEANOS

// Igualdade:             == (ou ===)
// Desigualdade:          != (ou !==)
// Maior que:             > 
// Maior que ou igual:    >= 
// Menor que:             <
// Menor que ou igual:    <=

const num = 10;

// console.log(num > 10);
// console.log(num >= 10);

// console.log(num == 10);
// console.log(num == '10');
// console.log(num === '10');

// Conjunções lógicas

// AND => &&

let idade = 26;
let cnh = true;

const permissao = idade >= 18 && cnh;

// console.log('Posso dirigir? ', permissao);

// OU => ||

idade = 40

const votoFacultativo = idade <18 || idade >=70;

// NOT => !

console.log(permissao, !permissao);