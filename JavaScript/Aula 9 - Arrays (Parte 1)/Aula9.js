// ARRAYS

// Como criar um array

let arr = ['Rafael', 26, 1.73, true];

// Como acessar os elementos de um array, você coloca o nome definido para o array e um [n] ao lado, o n vai indicar a posição que você deseja acessar;

console.log('Primeiro elemento: ', arr[0]);
console.log('Segundo elemento: ', arr[1]);
console.log('Terceiro elemento: ', arr[2]);
console.log('Quarto elemento: ', arr[3]);

// Como obter o tamanho de um array

console.log(arr.length);

// Percorrendo arrays

let aux;
let notas = [5, 6, 10, 9];
let soma = 0;

for(let i = 0; i < notas.length; i++) {
  aux = notas[i];
  soma += aux;
}

console.log('Média vai ser: ', soma/notas.length);

console.clear;

for(let elemento of arr) { // Cada iteração pega um elemento do array
  console.log(elemento);
}

console.clear;

for (let indice in arr) { // Cada iteração volta o índice do elemento percorrido
  console.log(indice);
}