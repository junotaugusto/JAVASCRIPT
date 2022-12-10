//SEÇÃO 3 - AULA 58 - WHILE, DO WHILE - ESTRUTURAS DE REPETIÇÃO.

//Geralmente, no loop for nós sabemos o tamanho da estrutura de repetição. Do length. Com while, é diferente, como o próprio nome propõe.

// let i = 0; //variável criada fora do while
// while(i <= 10){
//     console.log(i)
//     i++
// }

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}
const min = 1
const max = 20
let rand = random(min, max);
contador = 0

while(rand !== 10){
    rand = random(min, max)
    console.log(rand)
    contador = contador + 1
}

console.log(`${contador} vezes`)
