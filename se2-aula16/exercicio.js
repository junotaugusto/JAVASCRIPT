/*Exercício. Inserir uma variável que contém nome, uma que contém sobrenome, idade, peso, IMC (peso dividido por altura ao quadrado) e o ano de nascimento.*/

const nome = 'Junot Augusto';
const sobrenome = 'Patrial Cordeiro';
const idade = 39;
const peso = 103;
const altura = 1.74;
let imc;
let anoNascimento;
let anoAtual = 2021;
imc = peso / (altura*altura);
anoNascimento = anoAtual - idade;
console.log('Meu nome é',nome,sobrenome+', tenho', idade, 'anos,', altura+'m de altura e peso', peso+'kg. Meu íncie de massa corporal é',imc+'. Eu nasci em', anoNascimento+'.')
//Coloquei o sinal de + em alguns pontos da frase pra tirar os espaços. O sinal de + concatena o conteúdo.
console.log('')
//UTILIZANDO TEMPLATE STRINGS:
console.log(`Meu nome é,${nome} ${sobrenome}, tenho ${idade} anos, ${altura}m de altura e peso ${peso}kg. Meu íncie de massa corporal é ${imc}. Eu nasci em, ${anoNascimento}.`)