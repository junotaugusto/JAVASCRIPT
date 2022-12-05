
let data = new Date();
let diaSemana = data.getDay()
let mes = data.getMonth()

function zeroaEsquerda(num){
    return num >=10 ? num : `0${num}`
}

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch (diaSemana){
        case 0: diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1: diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2: diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3: diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4: diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5: diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6: diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default: diaSemanaTexto = '';
            return diaSemanaTexto
    }
}

function getMesDoAno(mes){
    let mesDoAnoTexto;
    switch (mes){
        case 0: mesDoAnoTexto = 'Janeiro';
            return mesDoAnoTexto;
        case 1: mesDoAnoTexto = 'Fevereiro';
            return mesDoAnoTexto;
        case 2: mesDoAnoTexto = 'Março';
            return mesDoAnoTexto;
        case 3: mesDoAnoTexto = 'Abril';
            return mesDoAnoTexto;
        case 4: mesDoAnoTexto = 'Maio';
            return mesDoAnoTexto;
        case 5: mesDoAnoTexto = 'Junho';
            return mesDoAnoTexto;
        case 6: mesDoAnoTexto = 'Julho';
            return mesDoAnoTexto;
        case 7: mesDoAnoTexto = 'Agosto';
            return mesDoAnoTexto;
        case 8: mesDoAnoTexto = 'Setembro';
            return mesDoAnoTexto;
        case 9: mesDoAnoTexto = 'Outubro';
            return mesDoAnoTexto;
        case 10: mesDoAnoTexto = 'Novembro';
            return mesDoAnoTexto;
        case 11: mesDoAnoTexto = 'Dezembro';
            return mesDoAnoTexto;
        default: mesDoAnoTexto = '';
            return mesDoAnoTexto
    }
}

const diaSemanaTexto = getDiaSemanaTexto(diaSemana)
const mesDoAno = getMesDoAno(mes)

function diaEHora(data){
    let dia = zeroaEsquerda(data.getDate());
    let mes = zeroaEsquerda(data.getMonth() + 1);
    let ano = zeroaEsquerda(data.getFullYear());
    let horas = zeroaEsquerda(data.getHours());
    let min = zeroaEsquerda(data.getMinutes());
    let seg = zeroaEsquerda(data.getSeconds());

    return `Hoje é ${diaSemanaTexto}, dia ${dia} de ${mesDoAno} de ${ano}. <br><br> Agora são exatamente ${horas}:${min}:${seg}`
}

let a = diaEHora(data)
let agora = document.getElementById('resultado')

function diaeano(){
    agora.innerHTML = a
    agora.style.textAlign = `center`
    agora.style.fontStyle = `italic`
}

/*
const h1 = document.getElementById('resultado');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleTimeString('pt-BR', opcoes);
*/

