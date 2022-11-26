//No código do professor ele fez várias funções menores que foram realizando os pedidos do usuário.

const form = document.querySelector('#formulario')
form.addEventListener('submit', function (e) { //e de evento. O elemento aqui é o formulário
 e.preventDefault();//Evita que o site dê refresh.
 const inputPeso = e.target.querySelector('#peso') //Aqui pega o input inteiro
 const inputAltura = e.target.querySelector('#altura')
 const peso = Number(inputPeso.value) //Aqui pega o valor.
 const altura = Number(inputAltura.value)

 if(!peso) { //Se o peso retornar um falsy, NaN etc...
        setResultado('Peso Inválido', false) //False aqui responde ao "isValid" da função setResultado
        return; //Para de executar o código e volta.
 }
 if(!altura) {
        setResultado('Altura Inválida', false)
        return;
 }

 const imc = getIMC(peso, altura)
 const nivelIMC = getNivelIMC(imc)
 const msg = `Seu Índice de Massa Corporal é de ${imc}. ${nivelIMC}`;
 setResultado(msg, true); //True aqui responde ao "isValid" da função setResultado
 }) 
 //A função está dentro do Listener que é quem "executa" a função dentro do elemento. Pelo que eu entendi, ele coloca o listener no javascript ao invés de inserir a função diretamente na tag do HTML.

function getNivelIMC(imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade 1', 'Obesidade 2', 'Obesidade 3', 'Pare de comer e procure um médico AGORA']
        if(imc > 50) return nivel[6]
        if(imc >= 39.9) return nivel[5] 
        
        if(imc >= 34.9) {
                return nivel[4]
        } 
        if(imc >= 29.9) {
                return nivel[3]
        } 
        if(imc >= 24.9) {
                return nivel[2]
        } 
        if (imc >= 18.5) {
                return nivel[1]
        } 
        if (imc < 18.5){
                return nivel[0]
        }
}

//Sempre que na função a gente acha a palavra return, a função para ali e não executa o restante. Por isso, o else em else if na função acima não é necessário. Se ele encontra e retorna o que deve retornar, a função ja para. Outra coisa interessante é que, se temos apenas uma linha no código do if, não é necessário o uso de chaves, conforme a primeira linha de código acima. A checagem foi feita de trás para frente justamente por causa de return.

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
        if (isvalid) { 
                p.classList.add('paragrafo-resultado')
        } else {
                p.classList.add('bad')
        }
        p.innerHTML = msg
        resultado.appendChild(p) //insere o elemento como filho.
}

