//SEÇÃO 3 - AULA 49 - MAIS DIFERENÇAS ENTRE VAR E LET/CONST
const verdadeira = true; 
let nome = 'Junot' //escopo global
var nome2 = 'Junot'

// var pode ser sobre escrita, diferentemente de let. 
// let tem escopo de bloco.
// var tem escopo de função.
var nome2 = 'Pedro'
// variáveis inseridas dentro de um bloco, no caso, if.
if (verdadeira){
    let nome = 'João' // escopo local deixando como João
    console.log('Ok', nome, nome2)
    if (verdadeira){
        var nome2 = 'Joilson'
        let nome = 'Outra coisa' //dentro de outro bloco agora como Outra Coisa
        console.log(nome, nome2)
    }
}

console.log(nome) //volta pro global que é Junot

//Diferentemente de let, var, se reescrita, irá receber e imprimir o último valor aribuido a ela, não importando se está em escopo local ou global.


//Porém, var tem escopo de função. Veja no exemplo abaixo.

function falaOi(){
    var nome3 = 'Lucas' 
    return nome3
}
console.log(falaOi())
//console.log(nome3) //vai dar erro porque o nome está apenas dentro da função.
//Mas podemos criar uma variável fora da função e utilizá-la dentro da função.
var adeus = 'Tchaaaaau'
function falaTchau(){
    return adeus
}
console.log(falaTchau());

//Porém, se essa variável adeus estivesse dentro da função, nós não poderíamos acessá-la fora da função.