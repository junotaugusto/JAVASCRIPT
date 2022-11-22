//No código do professor ele fez várias funções menores que foram realizando os pedidos do usuário.

const form = document.querySelector('#formulario')
form.addEventListener('submit', function (e) { //e de evento. O elemento aqui é o formulário
 e.preventDefault();//Evita que o site dê refresh.
 const inputPeso = e.target.querySelector('#peso') //Aqui pega o input inteiro
 const inputAltura = e.target.querySelector('#altura')
 const peso = Number(inputPeso.value) //Aqui pega o valor.
 const altura = Number(inputAltura.value)

 if(!peso) { //Se o peso retornar um falsy, NaN etc...
        setResultado('Peso Inválido', false)
        return; //Para de executar o código e volta.
 }
 if(!altura) {
        setResultado('Altura Inválida', false)
        return;
 }

 const imc = getIMC(peso, altura)
 console.log(imc)

 }
) //A função está dentro do Listener que é quem "executa" a função dentro do elemento. Pelo que eu entendi, ele coloca o listener no javascript ao invés de inserir a função diretamente na tag do HTML.


function getIMC(peso, altura){      
        const imc = peso / altura ** 2
        return imc.toFixed(2)
}

function criaP () {//Função criada para criar parágrafos.
        const p = document.createElement('p') //criando um parágrafo
        return p;
}

function setResultado(msg, isvalid){
        const resultado = document.querySelector('#resultado')
        resultado.innerHTML = '';
        const p = criaP()
        p.innerHTML = msg
        resultado.appendChild(p) //insere o elemento como filho.
}

