//SEÇÃO 3 - AULA 61 - EXERCÍCIO LÓGICA PROGRAMAÇÃO.

//ESCREVA UMA FUNÇÃO ePaisagem que recebe dois argumentos,largura e altura de uma imagem. Retorne true se a imagem estiver no modo paisagem

//Minha solução
const ePaisagem = (largura,altura) => largura > altura ? true : false
console.log(ePaisagem(1080,1920))

//Solução professor:
function paisagem(larg, alt) {
    return larg > alt;
}
console.log(paisagem(1920, 1080))

//Convertendo para arrow function da maneira dele:
const paisage = (largura, altura) => largura > altura
console.log(paisage(213,432))
