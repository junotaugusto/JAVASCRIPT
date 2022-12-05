//SEÇÃO 3 - AULA 50 - ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (ARRAYS)
/*
let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const letras = [b, c, a];
[a, b, c] = letras; //Isso é a atribuição via desestruturação. 

console.log(a, b, c)

*/

//... rest operator, spread operator
const numeros = [1000,2000,3000,4000,5000,6000,7000,8000,9000]
let [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros //pega os índices na ordem e depois o resto
console.log(primeiroNumero, segundoNumero, terceiroNumero)
console.log(resto)
let [um, , tres, , cinco, , sete] = numeros //deixando espaços em branco ele irá pular o índice. Lembrando que o nome das variáveis dentro do array podem ser qualquer um ainda não declarado, desde que atribuídos à um array inicial, como é o caso de numeros.
console.log(um, tres, cinco, sete)

const lista = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let [lista1, lista2, lista3] = lista

let [ , [, , numero6], ] = lista //desestruturação. eu quero apenas o número seis. então foi inserido um espaço em branco no primeiro índice que é uma lista, depois abri os colchetes e inseri mais dois espaços em branco até chegar ao número seis, atribuí a ele a variável número seis, fechei os colchetes e finalizei com mais um espaço em branco para o último índice da variável lista.

console.log(numero6) //ou...
console.log(lista2[2])