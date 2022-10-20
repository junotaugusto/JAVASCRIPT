//conceito de variável é como colocar um valor na memória do computador.
//Toda variável pode ser modificada. Não é uma constante.

/*
let nome = 'Lucas'; //Usa-se o let para criar variáveis.

console.log( nome, ' nasceu em 1984')
console.log('Em 2000,', nome, 'conheceu Maria')
console.log(nome,'casou-se com Maria em 2012')
console.log('Maria teve um filho com,',nome,' em 2015.')
console.log('O filho de', nome,' e Maria se chama Eduardo')
*/

let nome; //Declarando apenas que nome será uma variável mas não inserindo valor
nome = 'João'
console.log(nome)
nome = 'Bruno'
console.log(nome)
nome = 'Renata'
console.log(nome)
console.log('Verificando que a variável foi alterada várias vezes, e o último valor que a variável recebeu foi o nome de', nome)

/*
Algumas regras e orientações sobre variáveis:
1 - Não podemos criar variáveis com palavras reservadas, ou seja, palavras já presentes no código, como "let", "console", "if" etc.

2 - Variáveis precisam ter nomes significativos. Isso ajuda na hora de compreender o código. Como se fosse uma regra semântica.

3 - Não podemos começar uma variável com um número.

4 - Variáveis não podem conter espaços ou traços. Utilizamos o camelCase, ou seja, a primeira palavra com letra minúscula e as demais com letra maiúscula, como, por exemplo, "nomeDoCliente".

5 - As variáveis são case sensitive, ou seja, letra maiúscula e letra minúscula fazem diferença. Por exemplo, a variável "nomeCliente" é diferente de "nomecliente". Ambas funcionarão para o "motor" do JavaScript.

6 - Não podemos redeclarar variáveis utilizando let. Podemos apenas modificar o valor da variável sem usar let.

7 - Não utilizar VAR, utilizar LET.
*/

