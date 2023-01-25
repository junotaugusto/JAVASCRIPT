//1 - Crie uma função que calcule a média de um conjunto de números fornecidos como argumentos.
function media(n1,n2,n3,n4,n5) {
    return (n1 + n2 + n3 + n4 + n5) / 5
}
console.log(media(123,3,43,532,134))

//2 - Escreva uma função que verifique se um número dado é primo.
function primo(n){
    if(n <= 1){
        return false
    }
    for (let i = 2; i < n; i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}    
console.log(primo(17))

//3 - Escreva uma função que inverte uma string.
function inverteString(str){
    let reversed = "";
    for(let i = str.length-1; i>=0; i--){ //o índice dos caracteres de uma string começa em 0, então o último caractere da string tem o índice length-1.
    reversed += str[i]}
    return reversed
}
console.log(inverteString('Olá, meu nome é Junot'))
//4 - Escreva uma função que determina se uma string é um palíndromo (pode ser lida da mesma forma para frente e para trás).
function palíndromo(str){
    let rev1 = ""
    let rev2 = ""
    for(let i = str.length-1; i>=0; i--){
        rev1 += str[i]
    }
    for(let j = 0; j < str.length; j++){
        rev2 += str[j]
    }
    if(rev1.toUpperCase() === rev2.toUpperCase()){
        return 'true';
    } else {
        return 'false';
    }
}
console.log(palíndromo('Ola alo'))
//5 - Escreva uma função que retorna o maior número de um array dado.
function maiorNumero(array){
    return Math.max(...array)
}
console.log(maiorNumero([1,2,34,5]))

//6 - Escreva uma função que conta o número de ocorrências de cada letra em uma string.
function contaLetras(str){
    let ocorrencias = {} //cria-se um objeto?
    for(let i = 0; i < str.length; i++){ //Percorre a str
        let letra = str[i].toUpperCase();
        if(ocorrencias[letra]){ //verificação para ver se a letra já existe como chave no objeto ocorrencias. Não é necessário verificar se o valor é true, pois o JavaScript considera valores diferentes de undefined como verdadeiro.
            ocorrencias[letra]++ //Adiciona no objeto
        } else {
            ocorrencias[letra]= 1;
        }
    } 
    return ocorrencias
}
console.log(contaLetras('Arara'))

//7 -  Escreva uma função que remove todos os espaços em branco de uma string.
function removeEspaco(str){
    return str.replace(/\s/g, ""); //A barra (/) é utilizada para indicar o início e fim da expressão regular. O caractere de escape '\s' corresponde a qualquer espaço em branco, incluindo espaços, tabs e quebras de linha. O modificador g indica que a busca deve ser feita globalmente, ou seja, para todas as ocorrências na string, e não apenas para a primeira.
}
console.log(removeEspaco('O rato roeu a roupa do rei de roma' ))

//8 - Escreva uma função que ordena um array de números.
function emOrdem(listagem){
    listagem.sort(function(a,b){ //Quando a função de comparação sort é chamada com dois elementos, ela subtrai o segundo elemento do primeiro, e com base no resultado dessa subtração, o sort() decide se os elementos estão na ordem correta ou se precisam ser trocados tudo automaticamente.
        return a - b;
    })
    return listagem
};
console.log(emOrdem([1,10,3,2,0,8,9,'a']).join(",")) //O método join aqui é para que ele exiba a listagem no console em apenas uma linha, separando-os por vírgulas.
console.log(...emOrdem([0,33,43,12,42,55,12,11,9,2])) //Outra forma seria usando o spread operator para passar o array como argumento, sem o uso do join().

//Em resumo, a diferença entre função e método é que funções são independentes e podem ser chamadas de qualquer lugar, enquanto métodos são funções associadas a objetos especííficos e só podem ser chamadas a partir desses objetos. No caso do javascript, os métodos são funções que estão associadas a objetos e são chamadas como propriedades desses objetos. Isso significa que os métodos só podem ser chamados a partir de um objeto específico, enquanto as funções podem ser chamadas de qualquer lugar.

//9 - Remova itens duplicados de um array
function removeDuplicados(arr) {
    return arr.filter((item, indice) => arr.indexOf(item) === indice);
}
console.log(...removeDuplicados([1,2,3,4,5,6,7,8,9,0,9,8,7,8,6,4,3,5,2,2,6,5,4,3,6,3,2,4,5,3,6,8,9,4,2,6,0,8,5]))
//10 -

// O MÉTODO FILTER: é importante mencionar que o filter não modifica o array original, ele cria um novo array com os elementos desejados.

//Filtrando números pares ou ímpares:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

//Filtrando elementos com uma determinada propriedade:
let objects = [
    {id: 1, name: "John"},
    {id: 2, name: "Mary"},
    {id: 3, name: "Mike"}
  ];
  let filteredObjects = objects.filter(object => object.name.startsWith("M"));
  console.log(filteredObjects); // [{id: 2, name: "Mary"}, {id: 3, name: "Mike"}]

//Filtrando elementos com valores acima de um determinado limite:
let prices = [10, 20, 30, 40, 50, 60];
let filteredPrices = prices.filter(price => price > 30);
console.log(filteredPrices); // [40, 50, 60]

numbers = [1,2,3,4,5,6,7,8,9,10]
let pares = numbers.filter(number => number % 2 === 0);
console.log(pares)

//ARROW FUNCTION: Se a arrow function tem apenas uma expressão, o resultado dessa expressão é retornado automaticamente pelo corpo da função. Isso significa que é possível escrever arrow functions sem usar a palavra-chave return.

let digaAlgumaCoisa = (frase) => frase;
console.log(digaAlgumaCoisa('Olá'))

//Ou...Se a arrow function tiver mais de uma linha de código, você precisará usar a palavra-chave return explicitamente para retornar um valor.

let soma = (n1,n2,n3,n4) => {
    n5 = n1+n2+n3+n4
    return n5
}
console.log(soma(323,1,432,52))