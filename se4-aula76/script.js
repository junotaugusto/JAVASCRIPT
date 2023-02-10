//SEÇÃO 4 - AULA 76 - PRATICANDO COM FACTORY FUNCTIONS

// NESTA AULA FIZEMOS EXERCÍCIOS QUE ESTÃO NOS ARQUIVOS MODELO.

function criaCalculadora() { //Factory Function que cria a calculadora
    return { //Retorna um objeto
        display: document.querySelector(".display"),
        btnClear: document.querySelector(".btn-clear"),

        clearDisplay() {
            this.display.value = ''
        },

        inicia() {
            this.cliqueBotoes()
        },  
        deleteUm(){
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta(){

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