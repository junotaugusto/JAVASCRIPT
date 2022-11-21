//SEÇÃO 3 - AULA 39 - AVALIAÇÃO DE CURTO-CIRCUITO

//Em JavaScript tudo pode ser avaliado ou em verdadeiro, ou em falso.
// Valores FALSY (Avaliados como falsos):
/* 
   LITERAL
   false (literal) 
   
   FALSY:   
   0 (zero) 
   '' "" ``(string vazia)
   null - undefined (Valores nulos ou indefinidos)
   NaN (Not a Number)
   
   Qualquer coisa diferente destes acima é avaliado como TRUE em JavaScript.
 */


//O JavaScript vai checar a expressão e retornar a que estiver diferente. Por exemplo, em uma expressão que tiver dois valores verdadeiros e um falso, ele retorna o falso.

//Por exemplo, na expressão abaixo, as strings não estão vazias

console.log('Junot' && 0 && 'Renata');

// Mas, se ele checar e encontrar todas as expressões verdadeiras, ele retorna a última:

console.log('Junot' && 'Renata' && true);

//Então, se, por exemplo, for para executar uma função, ele irá checar se é falso ou verdadeiro antes de executar a função.

let str = 'oi'
function falaOi(){
    return 'olá'
}

console.log(str && falaOi()); //Ele irá mostrar undefined porque trata-se de uma expressão falsa.

//Portanto, se o operador for &&, ele precisa de todas as expressões verdadeiras para mostrar na tela a última checada. Se tiver alguma falsa, ele exibe a falsa.

//Utilizando o OR

console.log(str || falaOi());

//Se todas forem falsas, ele exibe a última. Se apenas uma ou mais de uma forem verdadeiras e as outras forem falsas, ele exibe a primeira verdadeira e se todas forem verdadeiras ele também exibe a primeira verdadeira.

const a = 0
const b = null
const c = NaN
const d = 'false' //Há valor atribuido aqui, portanto é true.
const e = false

console.log(a || b || c || d || e); //Ele exibe a string pegadinha.