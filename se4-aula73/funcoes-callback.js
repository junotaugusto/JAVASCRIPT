//SEÇÃO 4 - AULA 73 - FUNÇÕES CALLBACK

//Colocando o parâmetro callback em uma função, ele irá resguardar o espaço dentro da função para executar o que o callback pedir. No exemplo abaixo, a função f2 apenas ocorrerá depois que f1 já estiver ocorrido, mesmo que o tempo de execução seja menor, definido randomicamente. 

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if(callback) callback();
    }, rand())
}

function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if(callback) callback();
    }, rand())
}

function f3(callback){
    setTimeout(function(){
        console.log('f3')
        if(callback) callback();
    }, rand())
}

//function de callback que irá cair no parâmetro de f1, ou seja, logo após executar f1 ele irá executar f2, conforme definido abaixo.

f1(f1Callback)

function f1Callback(){
    f2(f2Callback)
}
function f2Callback(){
    f3(f3Callback)
}
function f3Callback(){
    console.log('Ola Mundo!')
}