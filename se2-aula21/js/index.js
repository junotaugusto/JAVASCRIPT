//SEÇÃO 2 - AULA 21 - ALERT, CONFIRM E PROMPT (NAVEGADOR)
window.alert('Oi sumido...') //Lembrando que a função alert não roda no NodeJS, apenas no navegador. Ele é um atalho da janela do navegador. Um atalho de window.alert() assim como console.log().
window.confirm('Certeza que deseja apagar?') //Retorna valores booleanos.
window.prompt('Digite seu nome: ') //Retorna dados digitados pelo usuário. 
console.log('')
console.log('Se atribuirmos as funções de prompt ou de confirm para uma variável, os dados serão atribuídos a essa variável. Veja no código.')
let nome = prompt('Qual o seu nome? ');
const apagar = confirm('Deseja apagar o arquivo?')
console.log(`O nome do usuário é ${nome}. O arquivo foi apagado? ${apagar}`)

 