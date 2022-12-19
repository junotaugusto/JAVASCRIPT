let inputTarefa = document.querySelector('.input-tarefa');
let btnTarefa = document.querySelector('.btn-tarefa')
let tarefas = document.querySelector('.tarefas')

//verificando se uma tecla foi pressionada. No caso, inserindo a tarefa ao pressionar da tecla ENTER. O KeyCode de ENTER é 13. Veja:
inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
    }
})


btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value) return //Se não tiver nada escrito.
    criaTarefa(inputTarefa.value)
})
//A ideia é jogar serviços para várias funções
function criaLi() {
    let li = document.createElement('li')
    return li
}

function criaBotaoApagar(){
    let botaoApagar = document.createElement('button')
    botaoApagar.innerHTML = 'Apagar'
}
function criaTarefa(textoInput){ //No parâmetro aqui, você estará colocando o texto inserido dentro do input ao clicar no botão, conforme estabelecido na linha 7.
    const li = criaLi()
    li.innerText = textoInput //innerText recebe o texto inserido
    tarefas.appendChild(li)
}


