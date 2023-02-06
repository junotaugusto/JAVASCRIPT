//SEÇÃO 4 - AULA 76 - PRATICANDO COM FACTORY FUNCTIONS

// NESTA AULA FIZEMOS EXERCÍCIOS QUE ESTÃO NOS ARQUIVOS MODELO.

function criaCalculadora() { //Factory Function que cria a calculadora
    return { //Retorna um objeto
        display: document.querySelector(".display"),


        inicia() {
            this.cliqueBotoes()
        },  
        cliqueBotoes(){
            document.addEventListener('click', function(e) {
                const el = e.target;
                console.log(this)

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay();                
                }
            });
        }, 

        btnParaDisplay() {

        }
    };
} 

const calculadora = criaCalculadora()
calculadora.inicia();