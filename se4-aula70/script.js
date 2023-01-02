//SEÇÃO 4 - AULA 70 - RETORNO DA FUNÇÃO.

//Sempre que utilizamos a palavra return a função termina ali.

function soma(a,b){
    return a + b
}
let soma1 = soma(2341,24213)
console.log(soma1)

//Console log apenas exibe o que estamos pedindo para exibir, não confunda com o retorno de uma função. O retorno de uma função somente pode ocorrer mediante a palavra return. 

function soma2(a, b){
    console.log(a + b)
}
let a = soma2(5,5);
console.log(a)//Ele irá exibir o valor de 10, porém irá exibir a palavra undefined porque essa função não retornou nada. 

//Uma função pode criar um objeto e retornar este objeto.
function criaPessoa(nome, sobrenome){
    return { 
        nome: nome, 
        sobrenome: sobrenome}
}
const pessoa1 = criaPessoa('Junot', 'Augusto');
const pessoa2 = criaPessoa('Renata', 'Cordeiro');

console.log(pessoa1, pessoa2);