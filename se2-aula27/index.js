// SEÇÃO 2 - AULA 27 - OBJETO MATH

let num1 = 9.4342;
let num2;
num2 = Math.floor(num1);  //Arredonda para baixo.
console.log(num2);

num2 = Math.ceil(num1);  //Arredonda para cima.
console.log(num2)

num2 = Math.round(num1);  //Arredonda o número para cima ou para baixo, dependendo dos números decimais. Da metade para cima ele arredonda para cima.
console.log(num2);

console.log(Math.max(1,2,4,43,24,79,13,123,53)); //Puxa o maior número da sequencia.

console.log(Math.min(1,2,4,43,24,79,13,123,53));  //Puxa o menor número da sequencia.

console.log(Math.random())  //Gera um número aleatório entre 0 e 1.

const maior = Math.max(1,2,3,4,5,6,9,322,33)  //Usando uma variável para encontrar o maior número.
console.log(maior);

const aleatorio = Math.round(Math.random() * (10 - 5) + 5);  //Encontra aleatóriamente um número entre 5 e 10 e o arredonda.
console.log(aleatorio);

num1 = 144;
console.log(Math.sqrt(num1));  //Encontrando a raiz quadrada.
console.log(num1 ** 0.5);  //Fórmula que também encontra a raiz quadrada.

console.log(100 / 0);  //Normalmente, em outras linguagens de programação, inclusive Python, quando dividimos um número por 0 ele aponta um erro no código. No JS, ele não aponta erros, é avaliado como verdadeiro (TRUE) e nos retorna o valor de INFINITY. Esse valor é retornado quando não há mais casas para mostrar, quando não há mais memória.






