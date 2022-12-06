//SEÇÃO 3 - AULA 52 - FOR CLÁSSICO ESTRUTURAS DE REPETIÇÃO


console.log('Linha 0')
console.log('Linha 1')
console.log('Linha 2')
console.log('Linha 3')
console.log('Linha 4')
console.log('Linha 5')
console.log('---------------------------------------------------------------------------------------');
//Passo 1 = Crie uma variável. Normalmente "i" de index.
//Passo 2 = Estabelece uma condição de parada do laço.
//Passo 3 = Incremente ou decremente a variável de controle.
for(let i = 0; i <= 10; i++){
    console.log(`Linha ${i}`)
}
console.log('---------------------------------------------------------------------------------------');
//De cima para baixo:
for(let i = 10; i>=0; i--){
    console.log(`Linha ${i}`)
}
console.log('---------------------------------------------------------------------------------------');

//Diminuindo de 10 em 10:
for(let i = 100; i>=0; i -=10){
    console.log(i)
}
console.log('---------------------------------------------------------------------------------------');
//Printando apenas números ímpares utilizando if:
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        continue
    } else {
        console.log(i)
    }
}
console.log('---------------------------------------------------------------------------------------');
//Usando uma variável fora do bloco:
let soma = 0
for(let i = 0; i <= 17; i++){
    console.log(`Linha ${i}`)
    soma = i + soma
}
console.log(soma)
console.log('---------------------------------------------------------------------------------------');
//Utilizando o length do array para chegar os itens:
let frutas = ['Maçã', 'Banana', 'Abacate', 'Tomate', 'Limão', 'Abacaxi', 'Laranja']
for(let i = 0; i < frutas.length; i++){
    console.log(`Índice: ${i} - Valor: '${frutas[i]}'`)
}
