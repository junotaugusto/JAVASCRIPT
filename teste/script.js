function criaPessoa(nome, idade){
    this.nome = nome,
    this.idade = idade;

    this.metodo = function(){
        console.log(this.nome + ': Sou um médoto')
    }
}
let p1 = new criaPessoa('Junot', 40)
p1.metodo()