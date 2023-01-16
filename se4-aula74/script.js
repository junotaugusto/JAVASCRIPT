//SEÇÃO 4 - AULA 74 - FUNÇÕES IMEDIATAS

// As funções imediatas (também conhecidas como IIFE - Immediately Invoked Function Expression) em JavaScript são funções que são automaticamente invocadas assim que são definidas. Elas são usadas para criar escopos locais, limitar o acesso a variáveis e funções, e também para evitar o poluimento global do escopo. Normalmente, uma IIFE é escrita como uma função anônima, envolta em parênteses, seguida de uma expressão de invocação.

//Isso evita que variáveis acidentalmente sejam definidas ou alteradas por outro código do seu programa. Além disso, as IIFEs são úteis para limitar o acesso a variáveis e funções específicas, o que significa que elas não estão disponíveis para o restante do seu código. Por fim, as IIFEs são úteis para criar escopos locais, o que significa que as variáveis definidas dentro de uma IIFE não podem ser acessadas de nenhuma outra parte do código.

//Este é um caso clássico de uma função.
function qualquercoisa(){
    console.log('123456')
}
qualquercoisa();

if(typeof qualquercoisa !== 'function'){
    function qualquercoisa(){
        console.log('123456')
    }
}

//Função imediata:
(function() { //Chama uma função anônima.
    console.log('Função imediata');
})();

//Usando variáveis dentro e fora do escopo global:

let nome = 'Junot';
(function(){
    const nome = 'Renata'
    console.log(nome)
})(); //Mostra o nome Renata
console.log(nome);//Mostra o nome Junot.

//Outro exemplo. Dessa vez, uma função normal foi criada dentro da IIFE:
(function(){ //cria função anônima e imediata
    const sobrenome = 'Augusto'; //Cria a variável sobrenome
    function criaNome(nome){ //Cria outra função que cria o primeiro nome
        return nome + ' ' + sobrenome //retorna o nome(que será definido no parâmetro e usa a variável anteriormente criada)
    }
    console.log(criaNome('Junot'))//printa na tela o primeiro nome e o sobrenome
})();

//IIFEs são tipicamente usados para executar um bloco de código imediatamente e apenas uma vez, logo após serem definidos. Uma vez que uma IIFE é executada, ela não pode ser invocada novamente.

// Isso torna as IIFEs úteis para situações em que é necessário executar lógica imediatamente, como configurar uma biblioteca ou inicializar uma aplicação, ou criar um novo escopo e proteger variáveis e funções do escopo global.

// Vale a pena mencionar que as IIFEs podem receber parâmetros e retornar um valor como funções normais, mas são normalmente usadas para executar lógica imediatamente, em vez de serem chamadas várias vezes com parâmetros diferentes.

// Resumindo, IIFEs são um tipo de função que são imediatamente invocadas uma vez após serem definidas e são principalmente usadas para executar lógica imediatamente, criar um novo escopo e encapsular dados. Enquanto as funções normais podem ser invocadas várias vezes e são destinadas a serem chamadas pelo seu nome após a sua definição.