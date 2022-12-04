//SEÇÃO 3 - AULA 47 - SWITCH/CASE

const data = new Date('1982-11-06 12:00:00'); //Ano-mês-dia hora:minuto:segundos
let diaSemana = data.getDay(); //traz o número do dia.
//let diaSemanaTexto;
/*

// Estabelecendo as condições...
if(diaSemana === 0){
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1){
    diaSemanaTexto = 'Segunda-Feira';
} else if (diaSemana === 2){
    diaSemanaTexto = 'Terça-Feira';
} else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta-Feira';
} else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta-Feira';
} else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta-Feira';
} else if (diaSemana === 6){
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = ''
}

//Estabelecendo as condições para averiguação...
if (diaSemanaTexto === ''){
    return console.log('Digite uma data válida');
}
else if (diaSemanaTexto === 'Domingo' || diaSemanaTexto === 'Sábado'){
    console.log(`Você nasceu em um ${diaSemanaTexto}`)
} else { 
    console.log(`Você nasceu em uma ${diaSemanaTexto}`)
} 

*/

//Utilizando o switch:
/*
switch (diaSemana){ //checa essa variável
    case 0: diaSemanaTexto = 'Domingo'; //caso for 0, faça isso...
    break;
    case 1: diaSemanaTexto = 'Segunda';
    break;
    case 2: diaSemanaTexto = 'Terça';
    break;
    case 3: diaSemanaTexto = 'Quarta';
    break;
    case 4: diaSemanaTexto = 'Quinta';
    break
    case 5: diaSemanaTexto = 'Sexta';
    break
    case 6: diaSemanaTexto = 'Sábado';
    break
    default: diaSemanaTexto = ''
}
*/

//Utilizando switch dentro de uma função.

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch (diaSemana){ //checa essa variável
        case 0: diaSemanaTexto = 'Domingo'; //caso for 0, faça isso...
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

const diaSemanaTexto = getDiaSemanaTexto(diaSemana)
if (diaSemanaTexto === ''){
    return console.log('Digite uma data válida');
}
else if (diaSemanaTexto === 'Domingo' || diaSemanaTexto === 'Sábado'){
    console.log(`Você nasceu em um ${diaSemanaTexto}`)
} else { 
    console.log(`Você nasceu em uma ${diaSemanaTexto}`)
} 


