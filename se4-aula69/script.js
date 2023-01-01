//SEÇÃO 4 - AULA 69 - PARÂMETROS DA FUNÇÃO

// Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

//Uma função sem parâmetros executará o que estiver dentro do bloco, mesmo que no chamado da função seja inserido algum valor. Veja:
function semParametros(){
    console.log('Esta função não tem parâmetros');//esta linha será executada
}
semParametros(1,2,3,4,5, 'valor');
console.log(' ');

//Porém, sempre quando definimos uma função utilizando a palavra function, o JavaScript deixa dentro da função uma variável chamada arguments. Essa variável sustenta todos os argumentos enviados na execução da função e os mostra em um formato de objeto. Lembrando que os argumentos são os valores enviados para os parâmetros da função. Veja:
function variavelArguments(){
    console.log(arguments);//pode adicionar um índice aqui que ele irá mostrar no log.
}
variavelArguments(1,2,3,4,5, 'valor');
console.log(' ');

//Somando os argumentos inseridos posteriormente em uma função sem parâmetros nenhum:
function soma(){
    let total = 0; //cria-se uma variável total.
    for(valores of arguments){ //para cada valor usado como argumento
        total += valores; //soma-se o total aos valores
    }
    console.log(total) //mostra o total na tela
}
soma(10,20,30,40,50);
console.log(' ');

//Parâmetros são as informações que estão entre os parênteses da função. Os parâmetros são valores enviados para que sejam capturados na execução da função. Veja o exemplo abaixo:
function dobro(numero){
    return `O dobro de ${numero} é ${numero * 2}`;
}
console.log(dobro(3987));
console.log(' ');
// A função acima recebeu apenas um parâmetro. Mas e se eu quiser inserir mais do que um? Vejamos:

function somando(a, b = 0){//colocando o valor de 0 em b como padrão
    //b = b || 0; //colocando o valor de 0 em b como padrão na moda antiga.
    console.log(a+b);
}
somando('aa', 3); //Desta forma ele irá concatenar os valores
somando(5, 5); //Desta forma ele irá somar os valores
somando(3)// Com apenas um argumento, ele irá retornar NaN. Porém, como temos o valor padrão de b como 0, ele retornará apenas o valor de a.
console.log(' ');

//Entretanto, podemos também utilizar o valor padrão de um argumento que esteja entre outros dois valores definidos. Veja:

function aSoma(a, b = 2, c){//O valor de b é 2 como padrão
    console.log(a + b + c);
}

aSoma(10,10,10); //Vai somar os três números, ignorando o valor padrão de b.
aSoma(10, undefined, 10); //Mas, inserindo b como undefined, é a ÚNICA maneira de manter seu valor padrão como argumento.
console.log(' ');
//Utilizando desestruturação
function funcaao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
funcaao({nome: 'Junot', sobrenome: 'Augusto', idade: 40});
console.log(' ');
//Função CONTA com variável, ou seja, Function Expression
const conta = function conta(operador, acumulador, ...numeros){//utilizando rest operator ele irá pegar todos os argumentos digitados após o segundo argumento, que no caso é o acumulador. 
    console.log(operador, acumulador, numeros)
    for(let numero of numeros){
        if(operador === '+'){
            acumulador += numero
        } else if(operador === '-'){
            acumulador -= numero
        } else if(operador === '*'){
            acumulador *= numero
        } else if(operador === '/'){
            acumulador /= numero
        }
    }
    console.log((acumulador).toFixed(2))
};
conta('*',1.5,1,2,3,4,5);
console.log(' ')
//Lembrando então que sempre que precisarmos enviar parâmetros indeterminados para uma função, utilize o rest operator, ou seja, os três pontinhos.
function semTamanhoDefinido(...args){
    console.log(args)
}
semTamanhoDefinido(10,20,30,40,50,'Junot', '*')