//SEÇÃO 4 - AULA 76 - PRATICANDO COM FACTORY FUNCTIONS

// NESTA AULA FIZEMOS EXERCÍCIOS QUE ESTÃO NOS ARQUIVOS MODELO.

function criaCalculadora() { //Factory Function que cria a calculadora
    return { //Retorna um objeto
        display: document.querySelector(".display"),
        btnClear: document.querySelector(".btn-clear"),

        clearDisplay() {
            this.display.value = ''
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },
        inicia() {
            this.cliqueBotoes()
            this.pressionaEnter()
        },  
        deleteUm(){
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta(){
            let conta = this.display.value

            try {
                conta = eval(conta)
                if(!conta) {
                    alert('Conta Inválida')
                    return
                } else {
                    this.display.value = conta
                }
            } catch (e) {
                alert('Conta Inválida')
                return
            }
        },
        cliqueBotoes(){
            document.addEventListener('click', function(e) {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);                
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                if(el.classList.contains('btn-del')){
                    this.deleteUm()
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
            }.bind(this));
        }, 

        btnParaDisplay(valor) {
            this.display.value += valor
        }
    };
} 

const calculadora = criaCalculadora()
calculadora.inicia(); 

/*A função criaCalculadora é uma Factory Function em JavaScript que retorna um objeto com vários métodos que criam uma calculadora simples. A função retorna um objeto que contém uma série de propriedades e métodos que são utilizados para construir a calculadora e suas funcionalidades.

As propriedades do objeto são display, que é o elemento do HTML onde o valor da calculadora é exibido, e btnClear, que é o botão na calculadora que limpa o display.

Os métodos que são retornados pela factory function são:

- clearDisplay(), que é responsável por limpar o display da calculadora;
- pressionaEnter(), que adiciona um event listener para a tecla "Enter" ser pressionada e, quando ela for pressionada, chama a função realizaConta();
- inicia(), que é responsável por inicializar a calculadora, executando a função - cliqueBotoes() e pressionaEnter();
- deleteUm(), que é responsável por deletar o último caractere do display da calculadora;
- realizaConta(), que é responsável por realizar o cálculo da conta e exibir o resultado no display;
- cliqueBotoes(), que adiciona event listeners aos botões da calculadora para realizar as operações.

Dessa forma, a função criaCalculadora() retorna um objeto com todas as propriedades e métodos necessários para criar e operar uma calculadora básica em JavaScript. 

---THIS---
A palavra reservada this no JavaScript é uma referência ao objeto em que uma função é executada. Ela permite que você acesse e manipule as propriedades e métodos do objeto em que a função está sendo executada.

No código da sua Factory Function criaCalculadora(), a palavra this é usada para se referir às propriedades e métodos do objeto retornado pela função. Isso permite que você acesse e manipule o elemento de display e os botões da calculadora a partir dos métodos definidos na Factory Function.

Por exemplo, ao chamar o método this.btnParaDisplay(valor), o this faz referência ao objeto retornado pela Factory Function, permitindo que você adicione o valor do botão clicado ao elemento de display da calculadora.

Já no método this.cliqueBotoes(), o this é usado para referenciar o objeto retornado pela Factory Function para adicionar um evento de clique para os botões da calculadora e chamar os métodos correspondentes. É importante notar que, quando se usa funções aninhadas em eventos, é necessário usar bind(this) para que o this referencie corretamente o objeto retornado pela Factory Function e os métodos possam ser chamados a partir dele.

---FACTORY FUNCTION---

Vamos supor que você está criando uma aplicação de e-commerce, que precisa de vários tipos de botões para diferentes fins, como botão de compra, botão de adicionar ao carrinho, botão de cancelar e assim por diante. Em vez de criar uma nova classe para cada tipo de botão, você pode usar uma factory function para criar botões personalizados com diferentes propriedades e métodos.

Por exemplo, você pode criar uma factory function "criaBotao" que recebe como parâmetros a cor, o tamanho e a função do botão, e retorna um objeto botão com essas características. Você pode então chamar essa função para criar diferentes tipos de botões:

function criaBotao(cor, tamanho, funcao) {
  return {
    cor: cor,
    tamanho: tamanho,
    funcao: funcao,
    render: function() {
      // código para renderizar o botão
    }
  };
}

const botaoComprar = criaBotao('verde', 'grande', function() {
  // código para adicionar item ao carrinho
});

const botaoCancelar = criaBotao('vermelho', 'médio', function() {
  // código para cancelar a compra
});

const botaoAdicionarCarrinho = criaBotao('azul', 'pequeno', function() {
  // código para adicionar item ao carrinho
});

Dessa forma, você pode criar diferentes tipos de botões com cores, tamanhos e funções diferentes, usando apenas uma factory function. Isso torna o código mais organizado e fácil de manter, além de economizar tempo e esforço na criação de novas classes.

*/