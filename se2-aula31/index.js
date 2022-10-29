//SEÇÃO 2 - AULA 31 - FUNÇÕES(BÁSICO).
//OBS: Para ler os cógidos, os retire dos comentários /* */

// CRIANDO UMA FUNÇÃO:
// Uma função é uma linha de código que executa uma ação.
// Geralmente as funções servem para retornar um valor referente ao valor inserido anteriormente.
// Para uma função ser criada em JavaScript, utilize a palavra "function".
// As funções possuem as mesmas regras das variáveis, como não começar com número, não aceita espaços etc.

/*
function saudacao() {
    console.log('Bom dia!')
}
saudacao();
*/

// A função acima é bem simples. Porém, as funções recebem quantas linhas de código o desenvolvedor quiser e essas linhas estão "protegidas", ou seja, elas não serão exibidas enquanto a função não for chamada. 

// Podemos criar parâmetros nas funções para que estes parâmetros complementem as funções. Os parâmetros vão dentro dos parênteses e são muito similares à variáveis. As funções também podem ser utilizadas quantas vezes você quiser. Vamos ver no exemplo abaixo:

/*
function saudacao(nome) {
    console.log(`Bom dia ${nome}`);
}
saudacao('Junot');
saudacao('Renata');
saudacao('Lucas');
saudacao('Junot Neto');
*/

// Lembrando que estes parâmetros podem ser quaisquer tipos de dados que são conhecidos como argumentos e eles podem ser Strings, Numbers etc..

// Podemos salvar também o que a função retorna em determinada variável.

function saudacao(nome) {
    return `Bom dia ${nome}!`;
}
const variavel = saudacao('Junot');
console.log(`A constante "variavel" recebeu a função "saudacao" que retornou a sentença "${variavel}"`); //Por padrão, qualquer função criada em JS vai retornar undefined caso não seja especificado o que a função deve retornar. Para que um valor seja retornado, utilize a palavra RETURN DENTRO da função, conforme feito acima. Lembrando que a partir do momento que ele ler a palavra RETURN, o código encerra.

// Então, vimos que as funções recebem um valor, pode executar uma ação, pode ou não também retornar um valor. Existem funções que não irão retornar um valor, mas, por enquanto, estamos vendo funções que retornam valores. 

// CRIANDO UMA FUNÇÃO COM MAIS DE UM ARGUMENTO:

function soma(x, y) {
    const resultado = x+y;
    return resultado;
} 
console.log(soma(10, 10));
console.log(soma(23, 34));
console.log(soma(87, 325));

const resultado = soma(50,50);
console.log(resultado); //A ideia aqui é mostrar que a variável constante resultado não tem nada a ver com a variável constante resultado que está DENTRO da função, até porque não podemos alterar o valor de uma constante. O que aconteceu aqui é que a constante resultado que está fora da função recebeu o valor da soma da constante que está dentro da função. Se tentarmos, a partir de agora, alterar o valor desta constante que está fora da função, ela apresentará uma mensagem de erro:

/*
resultado = soma(100+100); // Isso não pode ser feito
console.log(resultado); //Isso trará um erro.
*/

// ATRIBUINDO VALORES PADRÃO NAS FUNÇÕES:

function soma2(x = 10, y = 20) {
    const resultado2 = x + y;
    return resultado2
}
console.log(soma2(3, 3)); //Utilizando esses argumentos, a conta será feita normalmente e o resultado será 6, neste caso.
console.log(soma2()); //Porém, se não inserirmos nenhum argumento, ele executará os argumentos padrão, os valores que foram definidos previamente na função que, neste caso, resulta em 30.
console.log(soma2(5));  //Lembrando que, no caso de apenas um argumento for inserido, ele utilizará o valor inserido e o valor padrão do outro argumento. Neste caso, o x é igual a 5 e o y não foi definido, porém possui o valor de 20 como padrão, resultando em 25 a soma de ambos.

//CRIANDO UMA FUNÇÃO ANÔNIMA (AQUELAS QUE ESTÃO DENTRO DE VARIÁVEIS)
 







