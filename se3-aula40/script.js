//SEÇÃO 3 - AULA 40 - IF, ELSE IF E ELSE - PARTE 1
const hora = 43;

if(hora < 12){ //Se essa condição for verdadeira, ele exibe o trecho de código. Se não for verdadeira ele não chega no trecho de código abaixo.
    console.log(`Bom dia. São ${hora} horas!`)
}

if (hora >= 0 && hora <= 11){
    console.log(`Bom dia! São ${hora} horas!`)
} else if (hora >=12 && hora <=17) {
    console.log(`Boa tarde! São ${hora} horas!`)
} else if (hora >=18 && hora <=23){
    console.log(`Boa Noite! São ${hora} horas!`)
} else {
    console.log(`${hora} horas não é um horário válido. Digite novamente.`)
}
