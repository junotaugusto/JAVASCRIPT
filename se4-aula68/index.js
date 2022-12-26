//SEÇÃO 4 - AULA 68 - AS VÁRIAS MANEIRAS DE DECLARAR FUNÇÕES EM JAVASCRIPT

//DECLARAÇÃO DE FUNÇÃO.

falaOi()
function falaOi(){
    console.log('Oi')
}
//Essa função acima, declarada desta maneira, ocorre o function hoisting. Somente quando declaramos a função da maneira que está acima ocorre o funcion hoisting que é quando a engine do JavaScript eleva as declarações das funções para o topo do arquivo na hora da execução do mesmo, podendo declarar a função antes mesmo de escrevê-la, conforme está acima.

//As funções são "first class objects", ou seja, nós podemos tratar as funções como dados, colocando-as dentro de variáveis. Por exmplo:

const soma = function(n1,n2){
    return n1+n2
}
console.log(soma(13928,1939281))
//Function expression
const souUmDado = function(){ //usa-se função anônima aqui, mas ela funcionaria se tivesse nome também.
    console.log('Sou um dado...')
}

function executaFuncao(funcao){
    console.log('Vou executar sua função')
    funcao() //retirada do parâmetro
}
executaFuncao(souUmDado)//Passa a função como um dado. No caso, não deve-se colocar parênteses depois da função souUmDado porque nós não podemos executar a função como um parâmetro, apenas passá-las como dados. Nesse caso, ele "executa" a função como um dado e não como uma função, mesmo sendo uma função inicialmente. 

//Arrow Functions
const funcaoArrow = ()=> {
    console.log('Sou uma arrow function')
}
funcaoArrow()
//Lembrando que as arrow functions não são hoisting, ou seja, somente podem ser declaradas após a inicialização das mesmas.

//DENTRO DE UM OBJETO
//Cria um objeto e joga uma função como um método de um objeto. Inclusive, podemos criar a função dentro do objeto sem a função anônima, como ocorre em ouvir, abaixo.
const obj = {
    falar: function(){ //com a função anônima
        console.log('Estou falando...')
    },
    ouvir(){ //sem a função anônima.
        console.log('Estou ouvindo...')
    }
}
obj.falar() //executa a função utilizando o ponto.
obj.ouvir()

