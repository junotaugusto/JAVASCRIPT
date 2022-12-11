//SEÇÃO 3 - AULA 60 - EXERCÍCIO LÓGICA PROGRAMAÇÃO.

//ESCREVA UMA FUNÇÃO QUE RECEBE DOIS NÚMEROS E RETORNA O MAIOR ENTRE ELES.

//Minha solução:
function maiorNumero (n1,n2){
    if(n1>n2){
        return `Você digitou os números ${n1} e ${n2}. O maior entre os dois é o ${n1}`
    } else{
        return `Você digitou os números ${n1} e ${n2}. O maior entre os dois é o ${n2}`
    }
}
console.log(maiorNumero(102,5210))

//Solução professor 1 (refatorando):
function max(x, y){
    return x > y ? x : y;
}
console.log(max(123,5432))

//Solução do professor 2 (Arrow Function)
const max2 = (x,y) => {
    return x > y ? x : y
}
console.log(max2(23,34))

// Ou simplesmente, pelo fato de ser apenas uma linha:
const max3 = (x,y) => x > y ? x : y; 
console.log(max3(094,023))

