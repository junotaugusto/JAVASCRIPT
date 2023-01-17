//SEÇÃO 4 - AULA 75 - FUNÇÕES FÁBRICA

//Funções de fábrica são funções que retornam um objeto. Eles são usados para criar vários objetos semelhantes com a mesma estrutura. As funções de fábrica são uma ótima maneira de organizar o código e evitar se repetir. Por exemplo, se você precisar criar vários objetos de usuário com a mesma estrutura, poderá usar uma função de fábrica para criar os objetos, em vez de digitar o mesmo código para cada objeto. As funções de fábrica também podem receber parâmetros para que você possa personalizar os objetos criados.

//Em Javascript, 'this' é uma palavra-chave que se refere ao objeto atual. É usado para se referir a um objeto dentro de um contexto. O significado de 'this' depende do contexto em que é usado. Dentro de uma função, 'this' se refere ao objeto global. Dentro de um método de um objeto, 'this' se refere ao próprio objeto. Além disso, 'this' pode ser referenciado explicitamente usando a palavra-chave 'bind', 'call' ou 'apply'. Isso permite a você alterar o contexto de um objeto.


function criaPessoa(nome,sobrenome, a, p){
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            return `${nome} está falando ${assunto}`
        },
        altura: a,
        peso: p,
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    } 
}
const pessoa1 = criaPessoa('Junot', 'Augusto', 1.74, 104)
const pessoa2 = criaPessoa('Renata', 'Lemes', 1.63, 50);
console.log(pessoa1.fala('sobre Javascript.'));
console.log(pessoa2.fala('sobre Achei no Closet.'))
console.log(`${pessoa1.nome} tem o IMC de ${pessoa1.imc()}`)

//Outra criada pelo chatGPT:

function createPerson(name, age){ //função que recebe dois parâmetros
    return { //retorna o nome, idade e um método "greet"
        name: name,
        age: age,
        greet: function(){
            console.log('Hello my name is ' + name)
        }
    }
}

let person1 = createPerson('Junot', 40);
let person2 = createPerson('Renata', 39);
console.log(person1.name); 
console.log(person2.age); 
person1.greet();

//"Então, resumindo, se as variáveis nome e idade são passadas como argumentos para a função fábrica, como é o caso aqui, você não precisa usar a palavra-chave this para acessá-las no método greet, mas se elas são definidas apenas dentro da função fábrica, você precisa usar a palavra-chave this para acessar as propriedades do objeto retornado."

//A notação literal de objeto é a forma mais simples e comum de criar um objeto, a notação construtora de objeto, que veremos em aulas sequentes, permite criar várias instâncias de um objeto usando uma função construtora, e a notação de classe é uma funcionalidade mais recente que usa a palavra-chave "class" para criar um esboço para um objeto, é mais semelhante às classes de outras linguagens orientadas a objetos."

//Utilizando a factory function e o this.

function funcionarios(){ //sem argumentos
    return {
        nomeDoFuncionario: 'Lucas',
        sobrenomeDoFuncionario: 'Lemes',
        diga:function(){
            console.log('Olá, eu sou o funcionário ' + this.nomeDoFuncionario + ' ' + this.sobrenomeDoFuncionario) //Aqui ele inseriu o this para puxar esta variável.
        }
    }
}
let funcionario1 = funcionarios();
funcionario1.diga()

//Quando você passa dados para uma função como parâmetros, você pode usar esses valores de parâmetro dentro da função sem usar a palavra-chave this. Se você não passar nenhum parâmetro para a função e deseja usar os valores definidos dentro da função, você precisa usar a palavra-chave this para referenciar o objeto que a função está criando, para que o método possa acessar as propriedades e métodos do objeto."

// "Você também pode usar as palavras-chave let ou var para definir variáveis dentro da função e usá-las no método sem a necessidade da palavra-chave this.

// "É importante lembrar que, quando você usa as palavras-chave let ou var dentro da função, as variáveis só estão disponíveis dentro do escopo da função e não são adicionadas ao objeto como propriedades, então elas não podem ser acessadas fora da função.


//Usando get para que o método "finja" ser um atributo:
let obj = {
    _firstName: "Junot",
    _lastName: "Cordeiro Neto",
    get fullName() { //get
        return `${this._firstName} ${this._lastName}`;
    }
};
console.log(obj.fullName);//fullName, no caso, é um método, como você pode observar acima. Porém, não está se comportanto como um método por causa do Getter.
// 
//In the example above, fullName is defined as a getter that returns the concatenation of _firstName and _lastName. Although the fullName is a method, it can be accessed like a property, so when you call obj.fullName it returns "John Doe"

//Utilizando o setter:
function usaOSetter(nome0, sobrenome0, altura0, peso0){
    return {
        nome0,
        sobrenome0,
        altura0,
        peso0,
        //Getter
        get nomecompleto(){
            return `${this.nome0} ${this.sobrenome0}`
        },

        //Setter
        set nomecompleto(valor){
            valor = valor.split(' ') //separa o valor recebido pelo espaço. Isso virou um array. 
            this.nome0 = valor.shift()
            this.sobrenome0 = valor.join(" ");
        },
        //Getter
        get imc0(){
            const indiceMC = this.peso0 / (altura0 ** 2);
            return indiceMC.toFixed(2);
        }
    }
}
let alguem = usaOSetter('Julius', 'Rock da Silva', 2.0, 90)
alguem.nomecompleto = 'Renata Marilyz Lemes Cordeiro'
console.log(alguem.nome0)
console.log(alguem.sobrenome0);
console.log(`O nome completo ficou ${alguem.nomecompleto}`); //Da mesma forma que get, o setter também faz com que o método "finja" ser um atributo. A diferença é que o setter permite que o valor seja setado e atualizado como você quiser. No caso, o nome completo foi alterado.