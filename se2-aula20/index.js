//SEÇÃO 2 - AULA 20 - OPERADORES ARITMÉTICOS, DE ATRIBUIÇÃO E INCREMENTO/DECREMENTO.

 /* OPERADORES ARITMÉTICOS SÃO:
 Soma -> ( + ) -> Responsável por fazer a adição e a concatenação de strings.
 Subtração -> ( - ) -> Responsável pela subtração de números.  
 Multiplicação -> ( * ) -> Responsável pela multiplicação de números.
 Divisão -> ( / ) -> Responsável pela divisão de números
 Potenciação -> ( ** ) -> Responsável pela potenciação de números.
 Módulo ou Resto da Divisão -> ( % ) -> Responsável por apontar o resto de uma divisão em números inteiros.
 */

 console.log('Exemplos de adição:');
 console.log(''); 
 const num1 = 23; 
 const num2 = 234;
 let soma = num1 + num2
 console.log(`A soma de ${num1} + ${num2} é igual a ${soma}.`)
 console.log('')
 console.log('Porém, se "somarmos" uma string a um número ou a outra string utilizando o sinal de adição, teremos uma concatenação, conforme exemplo abaixo.')
 console.log('')
 let nome = 'João';
 let numero = 2022;
 let concatenação = nome + numero;
 console.log(`A concatenação de ${nome} + ${numero} é "${concatenação}"`)
 console.log('Concatenação na programação significa unir elementos.')
 console.log('')
 console.log('Na multiplicação, não existe muito segredo. A ideia é a mesma.')
 console.log(`Se multiplicarmos ${num1} por ${num2} o resultado será ${num1*num2}`)
 console.log('')
 console.log('Para a divisão, é a mesma coisa.')
 console.log(`Utilizando o operador de divisão, a divisão entre ${num1} e ${num2} é ${(num1/num2).toFixed(3)}`)//.toFixed aqui serve para diminuir as casas decimais.
 let numero1 = 5;
 let numero2 = 39;
 console.log('')
 console.log('Já na potenciação, utilizamos dois asteriscos, conforme código e resultado abaixo.')
 console.log(`A potência de ${numero2} elevado a ${numero1} é igual a ${(numero2 ** numero1)}`)
 console.log('')
 console.log('Por fim, temos o módulo, representado pelo sinal da porcentagem.')
 console.log(`O módulo, ou resto da divisão entre os números ${numero2} e ${numero1} é ${numero2 % numero1}`)
 console.log('')
 console.log('Na programação, os operadores têm precedênica, assim como na matemática. Eles irão respeirar a hierarquia das ordens. A ordem é: Parênteses -> Potenciação -> Divisão, Multiplicação ou Módulo -> Subtração ou Adição.')
numero1 = 10;
numero2 = 5;
let numero3 = 2;
let numero4 = 8;
let conta = numero1 + numero2 * numero4 / numero3 + (numero1 * numero4);
console.log(`A conta ${numero1} + ${numero2} * ${numero4} / ${numero3} + (${numero1} * ${numero4}) = ${(conta).toFixed(2)}`)
console.log('')
console.log('OPERADORES DE INCREMENTO')
console.log('Na programação, veremos várias vezes um número repetido. No caso abaixo, o operador "++" foi utilizado para somar mais um ao número em questão. Confira no código')
let contador = 1;
contador++; //Aqui ele irá somar mais 1 ao número 1. Isso deverá ser utilizado bastante em repetições.
contador++; //De novo...
contador++; //De novo...
contador++; //De novo...
contador++; //De novo...
contador++; //De novo...
contador++; //De novo...
contador++; //De novo...
console.log(contador) // O resultado é 9.
console.log('Não utilizamos esse operador em uma constante, somente em variáveis LET')
console.log('Os operadores de incremento podem ser inseridos antes, conforme código abaixo. Nesses casos, ele primeiro faz a conta e depois retorna o valor. No caso do pós, primeiro ele executa a ação do que pedimos e depois insere o valor. Veja a diferença no código abaixo')
console.log('')
let valor = 5;
valor++;
valor++;
valor++;
valor++;
valor++;
console.log(valor++) //Aqui, teoricamente, teria que printar o valor de 11. Na verdade, ele executou primeiro e somou depois, guardando +1 na memória. Se pedirmos para printar o valor agora, ele já terá adicionado mais um, deixando a variável com o valor de 11. Confira.
console.log(valor)
console.log('')
valor = 8;
++valor
++valor
++valor
++valor
console.log(++valor) //Neste caso, ele já somou antes e executou em seguida.
console.log('')
console.log('Temos também o operador de decremento, com o sinal de menos. A mecânica é a mesma do de incremento.')
valor = 10;
--valor
--valor
console.log(valor)
console.log('')
console.log('OPERADORES DE ATRIBUIÇÃO: Atribuindo passos ou valores para contadores')
let cont = 0;
const passo = 30;
cont += passo; //cont = cont + passo(30)
console.log(cont)
console.log('')
cont = 0;
cont += 2; //cont = cont + 2
console.log(cont)
console.log('')
console.log('Podemos atribuir isso a qualquer operador aritmético. Por exemplo:')
cont = 10;
cont *= 2;
cont *= 2;
cont *= 2;
console.log(cont)
console.log('')
console.log('CONVERTENDO STRINGS EM INTS, FLOATS ETC...')
const number1 = 10;
const number2 = parseInt('5'); //Convertendo uma string em uma int.
console.log(number1 * number2);
console.log(typeof(number2)); //Aqui ele já mostra que é um número
console.log('')
let altura = parseFloat('1.74'); //Temos que coverter essa string para float, senão a conta não fecha porque o int ignora as casas decimais.
let peso = 106;
let imc = peso / (altura**2);
console.log((imc).toFixed(2));
console.log(typeof(imc));
console.log('');
peso = 100;
altura = Number('1.80'); // Utilizando Number para conversão
imc = peso / altura**2;
console.log((imc).toFixed(2))

