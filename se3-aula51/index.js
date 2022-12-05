//SEÇÃO 3 - AULA 51 - ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (OBJETOS)

const pessoa = {
    nome: 'Junot',
    sobrenome: 'Augusto',
    idade: 40,
    endereco: {
        rua: 'Rua Pará',
        numero: 1790
    }
}

//const nome = pessoa.nome; //atribuição normal
//console.log(nome)

const {nome, sobrenome, idade} = pessoa //atribuição via desestruturação.
console.log(nome, sobrenome, idade)

const { nome: teste } = pessoa //atribui à chave nome a variável teste.
console.log(teste)

//Puxando o objeto dentro do objeto e o objeto em si, imprimindo e atribuindo à chave rua a variável r.
const {endereco: {rua: r, numero}, endereco} = pessoa
console.log(r, numero, endereco)