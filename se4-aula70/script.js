//SEÇÃO 4 - AULA 70 - RETORNO DA FUNÇÃO.

//Sempre que utilizamos a palavra return a função termina ali.

function soma(a,b){
    return a + b
}
let soma1 = soma(2341,24213)
console.log(soma1)
console.log(' ');

//Console log apenas exibe o que estamos pedindo para exibir, não confunda com o retorno de uma função. O retorno de uma função somente pode ocorrer mediante a palavra return. 

function soma2(a, b){
    console.log(a + b)
}
let a = soma2(5,5);
console.log(a)//Ele irá exibir o valor de 10, porém irá exibir a palavra undefined porque essa função não retornou nada. 
console.log(' ');
//Uma função pode criar um objeto e retornar este objeto.
function criaPessoa(nome, sobrenome){
    return { 
        nome: nome, 
        sobrenome: sobrenome}
}
const pessoa1 = criaPessoa('Junot', 'Augusto');
const pessoa2 = criaPessoa('Renata', 'Cordeiro');
console.log(pessoa1, pessoa2);
console.log(' ');

//Abaixo, cria-se uma função para falar uma frase que recebe o parâmetro começo, ou seja, o começo da frase. No caso, usaremos a frase 'Olá Mundo!'. 
//Dentro da função falaFrase criamos outra função, falaResto, que irá falar o restante da frase. No caso, o começo da frase é 'Olá', e o resto 'Mundo!'. 
function falaFrase(comeco){//função para criar o começo da frase
    function falaResto(resto){//função para criar o resto da frase
        return comeco + ' ' + resto; //retorna o começo, um espaço entre eles e o resto.
    }
    return falaResto;//retorna o resto da frase dentro da função falaFrase, que irá falar o começo da frase
}
const olaMundo = falaFrase('Olá'); //olaMundo vira uma função que retorna o resto.
console.log(olaMundo('Mundo!'));
console.log(' ');

//Para entender melhor o conceito de, como se fosse um aninhamento de funções, vamos ver abaixo:
function criaMultiplicador(multiplicador){//cria a função 
    return function multiplicacao(numero){//retorna outra função que retorna a multiplicação dos parâmetros
        return numero * multiplicador
    }
}
const duplica = criaMultiplicador(2);// cria a variável que duplica
const triplica = criaMultiplicador(3);// cria a variável que triplica
const quadriplica = criaMultiplicador(4);// cria a variável que quadriplica
console.log(quadriplica(43123))

