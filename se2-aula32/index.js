//SEÇÃO 2 - AULA 32 - OBJETOS (BÁSICO)

// Em JavaScript, podemos criar objetos utilizando chaves.
// Dentro das chaves, criamos atributos para o objeto.

const pessoa01 = {
    nome: 'Junot',
    sobrenome: 'Patrial Cordeiro',
    idade: 39
}
console.log(pessoa01.nome);
console.log(pessoa01.sobrenome);
console.log(pessoa01.idade);

// Podemos também utilizar funções para criar objetos. Uma função que cria objetos é chamada de Factory.

function criarPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
const pessoa = criarPessoa('Junot', 'Cordeiro Neto', 10);
console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade);

// CRIANDO MÉTODOS DENTRO DA VARIÁVEL

const cadastro = {
    nome: 'Junot',
    sobrenome: 'Augusto',
    idade: 39,
    dizer() {  //Isso é um método
        console.log(`${this.nome} ${this.sobrenome} está dizendo oi...`);
    }
}
cadastro.dizer();