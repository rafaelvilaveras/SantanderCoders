// OBJETOS

// Como criar objetos em JS

let pessoa = {
  nome: 'Rafael',
  idade: 26,
  estudando: true
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.estudando);
console.log(pessoa['nome']);

console.clear(); 

// Como adicionar um elemento

pessoa.altura = 1.73;

console.log(pessoa);

console.clear();

// Como remover um elemento

delete pessoa.altura;

console.log(pessoa);

console.clear();

// Como percorrer

for(let chave in pessoa) {
  console.log(chave);
}