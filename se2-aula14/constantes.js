/*
Algumas regras e orientações sobre variáveis constantes:
1 - Não podemos criar variáveis constantes com palavras reservadas, ou seja, palavras já presentes no código, como "let", "console", "if" etc.

2 - Constantes precisam ter nomes significativos. Isso ajuda na hora de compreender o código. Como se fosse uma regra semântica.

3 - Não podemos começar uma constante com um número.

4 - Constantes não podem conter espaços ou traços. Utilizamos o camelCase, ou seja, a primeira palavra com letra minúscula e as demais com letra maiúscula, como, por exemplo, "nomeDoCliente".

5 - As constantes são case sensitive, ou seja, letra maiúscula e letra minúscula fazem diferença. Por exemplo, a constante "nomeCliente" é diferente de "nomecliente". Ambas funcionarão para o "motor" do JavaScript.

6 - Não podemos modificar constantes.

7 - Não utilizar VAR, utilizar CONST.
*/
const meuNome = 'Junot Augusto'; //Não tem como apenas declarar uma constante porque ela não pode ser modificada posteriormente.
let nome;
console.log(meuNome);
nome = 'Junot Cordeiro Neto';
console.log('Meu nome é',meuNome,'e meu filho se chama',nome);
console.log('');
const primeiroNumero = 5;
const segundoNumero = 10;
multiplicacao = primeiroNumero * segundoNumero
console.log(multiplicacao)

console.log('Os números não possuem aspas e as strings estão dentro de aspas. Importante dizer que o JavaScript é uma linguagem de tipagem dinâmica, ou seja, o tipo da variável é definido automaticamente. Mas, para buscar o tipo do arquivo, digite console.log(typeof(variável))')

console.log('A variável' ,multiplicacao,'é do tipo' ,typeof(multiplicacao))
console.log('É importante colocar os parênteses para dividir as funções de cada argumento')
console.log(typeof nome + primeiroNumero);
console.log(typeof(nome + primeiroNumero));