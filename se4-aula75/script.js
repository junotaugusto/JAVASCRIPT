//SEÇÃO 4 - AULA 75 - FUNÇÕES FÁBRICA
function criaPessoa(nome,sobrenome){
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            return `${nome} está falando ${assunto}`
        }
    }
}
const pessoa = criaPessoa('Junot', 'Augusto')
console.log(pessoa.fala('sobre Javascript.'));