//SEÇÃO 2 - AULA 24 - MAIS SOBRE STRINGS
//Strings são indexadas, ou seja, cada caractere possui um índice.
let umaString = 'Uma String é um texto';
console.log(umaString[4]);  //Retorna o valor do índice destacado.
console.log(umaString.indexOf('um'));  //Busca o primeiro índice da palavra em questão. Caso não seja encontrada ele retorna o valor de "-1".
console.log(umaString.indexOf('e', 5));  //Busca a letra em questão após o índice destacado.
console.log(umaString.lastIndexOf('texto'));  //Busca de trás para a frente no texto.   
console.log(umaString.replace('String', 'Interger')) //Troca a palavra primeiramente designada pela segunda atribuída.
console.log(umaString.replace('a', 'x')); //Troca a letra a pela letra x.
console.log(umaString.replace(/m/g, '#')); //Também faz a troca. Não esqueça da flag g para que todas as letras g sejam substituídas. 
console.log(umaString.length); //Mostra o tamanho da string.
console.log(umaString.slice(4, 10)); //Corta o texto do caracter número 4 ao número 10.
console.log(umaString.split(' '));  //Divide a string pelo caractere determinado e a agrupa em um Array. Neste caso, é um espaço em branco. Lembrando que este valor não é incluído no array. Se fosse uma letra, por exemplo, essa letra seria excluída da lista.
console.log(umaString.split(' ', 2));  //Mesma coisa que em cima, mas ocorrendo apenas duas vezes, conforme determinado no código.
console.log(umaString.toUpperCase());  //Toda maiúscula.
console.log(umaString.toLowerCase());  //Toda minúscula.
