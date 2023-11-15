// ARRAYS - PARTE 2 - MÉTODOS DE ARRAYS

const arr1 = [30, 12, 45, 34, 29];
const arr2 = [];

// slice, seleção de múltiplos itens

console.log(arr1.slice(0, 2)); // Início e fim, fim não está incluso na contagem
console.log(arr1.slice(2)); // Colocando apenas um número ele considera como o início e vai até o final

console.clear();

// push | unshift, adição de itens

console.log('Antes de add: ', arr2);

arr2.push(10); // push joga os elementos adicionados para o final do array
arr2.push(8); 

console.log('Depois de add: ', arr2);

console.clear();

console.log('Antes de add: ', arr2);

arr2.unshift(30); // unshift coloca o item adicionado no início do array
arr2.unshift(6) 

console.log('Depois de add: ', arr2);

console.clear();

// pop | shift, remoção de itens

const elemento_removido = arr2.pop(); // pop o último elemento de um array, ele salva o elemento removido, então você pode usar ele dessa forma: const elemento_removido = pop.array

console.log(arr2, 'elemento removido: ', elemento_removido);

const elemento_removido2 = arr2.shift(); // shift remove o primeiro elemento de um array, funciona da mesma forma que o pop, guarda o elemento removido

console.log(arr2, 'elemento removido: ', elemento_removido2);

console.clear();

// concat, concatenação ou junção de dois arrays

console.log('arr1', arr1);
console.log('arr2', arr2);

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

console.clear();

// indexOf | lastIndexOf, busca de elementos

let indiceDoElemento34 = arr1.indexOf(34); // Retorna o índice do PRIMEIRO item compatível com o conteúdo do parênteses, se o item não existir ele retorna -1

console.log(indiceDoElemento34);

const arr3 = [1, 2, 3, 3, 5, 3 ];

console.log(arr3.indexOf(3));

console.log(arr3.lastIndexOf(3)); // lastIndexOf retorna o último item compatível com o conteúdo do parênteses, se não existir retorna -1

console.clear();

// includes, descobrir a existência de um número

console.log(arr1.includes(10)) // Retorna true ou false dependendo se um item existe no array;

console.clear();


// reverse, inverte o array

console.log(arr1);
console.log(arr1.reverse());

