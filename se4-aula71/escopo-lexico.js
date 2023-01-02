//SEÇÃO 4 - AULA 71 - ESCOPO LEXICO

//Escopo lexico é quando a função conhece o local onde ela foi declarada, tudo o que está declarado dentro dela e o que está nos vizinhos. 
//No exemplo abaixo, a variável nome não está dentro da função, porém a função buscou a variável nome em seu "pai". Ela busca a variável em escopos acima até encontrar. Caso não encontre, ocorre um erro afirmando que a variável não está definida. 

const nome = 'Junot';
function falaNome(){
    console.log(nome)
}
// falaNome()
console.log(' ');

//Mas, se criarmos uma função que irá apenas servir para usar a outra e inserirmos outra variável dentro desta função, ela irá respeitar o escopo lexico, indo para o "pai". Confira:

function usaFalaNome(){
    const nome = 'Lucas'
    falaNome()
}
usaFalaNome() //Ele continua respeitando aqui o escopo lexico onde a variável nome está no escopo acima de onde a função foi executada. usaFalaNome executa a função falaNome que está acima e puxa a variável nome do escopo acima dela, por isso a variável nome igual a Lucas não será executada aqui. 

//Exemplo de uma função dentro de outra.
function criaNome(nome){
    function falaONome(){
        console.log(nome)
    }
    return falaONome()
}
criaNome('Junot Augusto')
