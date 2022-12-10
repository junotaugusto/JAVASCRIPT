//SEÇÃO 3 - AULA 59 - BREAK & CONTINUE.
const lista = [1,2,3,4,5,6,7,8,9,10];

for (let numero of lista){
    console.log(numero);
}
console.log('#######################################################################################')
//Para pular o código que executa uma ação dentro da iteração:
for (let numero of lista){
    if(numero === 2){
        console.log('Espaço em branco')
        continue
    } else{
    console.log(numero);}
}

//Utilizando break. Pode melhorar a velocidade do código.
//Primeiros vamos criar uma lista com 100 números
const numeros = []
for (let i = 0; i<=100; i++){
    numeros.push(i)
}
console.log(numeros)
//Depois vamos procurar o número 23:
contador = 0
for(let numero of numeros){
    contador += 1
    if (numero === 23){
        console.log(`Encontrei o número ${numero} no índice ${contador}`)
        break
    } 
}
console.log(contador)
//O contador mostra que ele saiu do índice 0 e foi até o 23, não dando continuidade no laço por conta do break. Se a palavra break não estivesse ali, ele não pararia de contar até o final do laço.
