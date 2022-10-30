// SEÇÃO 2 - AULA 33 - VALORES PRIMITIVOS E VALORES POR REFERÊNCIA

/* 
DADOS PRIMITIVOS - STRING, NUMBER, BOOLEAN, UNDEFINED, NULL, BIGINT E SYMBOL
Quando falamos sobre dados primitivos, falamos em dados imutáveis, ou seja, o VALOR PRIMITIVO é imutável. 

Quando falamos de dados, estamos falando especificamente do valor, e não diretamente da variável.
*/

let nome = 'Junot';
nome = 'Augusto';
console.log(nome);  //atribuimos Augusto à variável nome. Porém, o valor Junot apenas foi trocado pelo valor Augusto e não foi modificado.
nome[0] = 'N'; // Aqui, utilizando o array, podemos ver que a letra A não será modificada pela letra N, porque a String é IMUTÁVEL. 
console.log(nome[0]);
console.log(nome);

// FAZENDO UMA CÓPIA
// No caso abaixo em específico, de valor primitivo, estamos fazendo uma cópia da variável "a" para a variável "b".
let a = 'A';
let b = a;  
console.log(a, b);
// Porém, se atribuirmos outra coisa à variável "a", veremos que o valor de "b" não modifica. Isso ocorre porque "b" é uma cópia do valor de "a".
a = 'Outra coisa';
console.log(a, b);
let c = a;
console.log(c);  // A cópia mantém o valor do valor que está na variável naquele momento, como se a variável fosse uma caixa que contém valores que são trocados.

/* 
DADOS POR REFERÊNCIA - ARRAYS, OBJETOS, FUNCTIONS. São mutáveis.
*/
// Verifique o caso abaixo. Neste caso, não é uma cópia, porque não se trata de um dado primitivo, mas sim por referência. Isso quer dizer que a variável "listaB" não está copiando o valor de "listaA" mas sim FAZENDO UMA REFERÊNCIA, APONTANDO para o mesmo local que "listaA" aponta na memória.  
let listaA = [1,2,3,4,5];
let listaB = listaA;
console.log(listaA, listaB);
//Diferentemente dos dados primitivos, os dados por referência são mutáveis, conforme vemos abaixo nos dois exemplos:
listaA.push(6);
console.log(listaA, listaB);
listaA[0] = 10;
console.log(listaA, listaB);
// Como estamos falando de referência, se eu alterar tanto o valor de "listaA", como o valor de "listaB", eles apontarão para o mesmo valor no final. Então não importa qual variável eu modifique, ambas apontarão para o mesmo valor. O que está sendo alterado, na verdade é o valor. As variáveis apenas apontam para o mesmo local. Veja:
console.log(listaA, listaB);
listaB[3] = 11;
console.log(listaA, listaB); //Os valores de ambas variáveis mudam, porque elas apontam para o mesmo local.
// Se criarmos outra variável e a referenciarmos a uma outra, a ideia se mantém.
let listaC = listaA;
listaC[0] = 'Junot'
console.log(listaA, listaB, listaC);

// COPIANDO O VALOR DE UM ARRAY PARA OUTRO SEM MODIFICÁ-LO DEPOIS
// Para realmente copiarmos um valor de uma variável para outra utilizando um array, fazemos assim:
let v1 = [1,2,3]; //Atribuindo valores à variável "v1"
let v2 = [...v1]; //Fazendo uma CÓPIA de "v1" para "v2"
console.log(v1, v2); //Exibindo variáveis e mostrando o mesmo valor
v2.push(4); //Alterando o valor da variável v2
console.log(v1,v2); // Verificamos que o valor de "v1" permaneceu igual e o valor de "v2" foi modificado.

// CRIANDO OBJETOS. Lembrando que arrays são colchetes e objetos são chaves.
// Aqui, como os objetos também são por referência e, por isso, mutáveis, eles se comportam da mesma maneira que os arrays. Veja:
const pessoaA = { //Atribuindo valores
    nome: 'Junot',
    sobrenome: 'Augusto'
};
const pessoaB = pessoaA; //Fazendo referência uma a outra
console.log(pessoaA.nome, pessoaB.nome); //Obtendo o mesmo resultado.
pessoaA.nome = 'João'; //Alterando apenas um valor de uma variável.
console.log(pessoaA.nome, pessoaB.nome); //Verificando que alterou as duas, porque apontam para o mesmo local da memória.

// FAZENDO CÓPIA DE OBJETOS
// A mecânica é a mesma do array. Veja
const clienteA = { //Atribuindo valores
    nome: 'Renata',
    sobrenome: 'Cordeiro'
};
const clienteB = {...clienteA}; //Fazendo uma cópia, ou um SPREAD.
clienteB.nome = 'Junot'; //Alterando dados
clienteB.sobrenome = 'Augusto' //Alterando dados
console.log(clienteA.nome, clienteA.sobrenome, clienteB.nome, clienteB.sobrenome); //Confirmando as alterações.  

