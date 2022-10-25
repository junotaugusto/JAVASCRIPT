//SEÇÃO 2 - AULA 26 - MAIS SOBRE NUMBERS.
let num1 = 1;  //number
let num2 = 2327;  //number
let num3 = 18.23983913
 
console.log(num1.toString() + num2); //Concatenando, SOMENTE NESTA LINHA.
console.log(typeof(num1));  //Ele permanece como um NUMBER
num1 = num1.toString()  //Atribuindo a mudança à uma variável...
console.log(typeof(num1))  //Agora sim, convertido para STRING.
console.log(num2.toString(2));  //Colocando o número 2 ali converte para a versão binária do número. 
console.log(num3.toFixed(2))  //Mostra apenas duas casas decimais após a vírgula do número.
console.log(Number.isInteger(num2))  //Retorna se o número em questão é inteiro ou não.
console.log(Number.isNaN(num1))  //Retorna se o número em questão é uma conta válida, se não é um número. Serve bem para ifs...

//PARA CONVERTER UM FLOAT EM UM NÚMERO REAL.

let num4 = 0.7;
let num5 = 0.1;
console.log(num4 + num5); //O resultado fica 0.799999999999...
num4 += num5;
num4 += num5;
num4 += num5;  //Aqui ja deveria ser 1.0, mas manteve em 0.999999999999
//Resolução:
num4 = Number(num4.toFixed(2));  //Insira o objeto Number.
console.log(num4) 
