function horarioZerado(segundos){
    let data = new Date(segundos * 1000) //multiplica por 1000 por causa dos milissegundos do JavaScript.
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT' //zerando a hora.
    })
}



let relogio = document.getElementById('relogio');
let iniciar = document.querySelector('.iniciar');
let pausar = document.querySelector('.pausar')
let zerar = document.querySelector('.zerar')

let segundos = 0; //zera os segundos em uma variável.
let timer; //variavel de escopo global para setar e pausar o relógio.

function iniciaRelogio(){ //função para iniciar relógio.
    timer = setInterval(() => {
        segundos++ //vai adicionar os segundos ao horario
        relogio.innerHTML = horarioZerado(segundos)
    }, 1000); 
}
//Pegando evento de click nos botões utilizando addEventListener:
iniciar.addEventListener('click', function(event){
    clearInterval(timer) //garante que nenhum outro timer esteja rodando simultaneamente.
    iniciaRelogio()
    relogio.style.color = 'black'
});
pausar.addEventListener('click', function(event){
    relogio.style.color = 'red'
    clearInterval(timer)
});
zerar.addEventListener('click', function(event){
    clearInterval(timer)
    segundos = 0
    relogio.innerHTML = '00:00:00'
    relogio.style.color = 'black'
});

