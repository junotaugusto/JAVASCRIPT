//SEÇÃO 3 - AULA 65 - SETINTERVAL E SETTIMEOUT

//Funções para controlar timers

function mostraHora(){
    let data = new Date()
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

console.log(mostraHora())

//setInterval() configura um intervalo de tempo para que alguma função seja executada em determinado momento. 

// function funcaoDoInterval(){
//     console.log(mostraHora())
// }

// funcaoDoInterval()

const timer = setInterval(() => { //esses parênteses representam uma função anônima.
    console.log(mostraHora()) //executa a função anteriormente estabelecida.
}, 1000); //timer de 1000 milissegundos.

setTimeout(() => { //essa função executa apenas 1 vez
    clearInterval(timer) //vai parar a função
}, 5000); //quando atingir 5 segundos ou 5000 milissegundos.

setTimeout(() => {
    console.log('Olá Mundo') //Vai exibir essa mensagem ao final de 6 segundos.
}, 6000)
