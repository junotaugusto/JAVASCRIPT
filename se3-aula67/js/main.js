let inputTarefa = document.querySelector('.input-tarefa');
let btnTarefa = document.querySelector('.btn-tarefa')
let tarefas = document.querySelector('.tarefas')

//verificando se uma tecla foi pressionada. No caso, inserindo a tarefa ao pressionar da tecla ENTER. O KeyCode de ENTER é 13. Veja:
inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return //se o imput não estiver vazio
    criaTarefa(inputTarefa.value)
    }
})

function limpaImput(){ //Vai limpar o imput assim que ele pressionar enter
    inputTarefa.value = ''
    inputTarefa.focus(); //Focus irá manter o cursor no input
}

btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value) return //Se não tiver nada escrito.
    criaTarefa(inputTarefa.value)
})
//A ideia é jogar serviços para várias funções
function criaLi() {
    let li = document.createElement('li')
    return li
}

function criaBotaoApagar(li){ //Recebe um li porque é preciso saber onde este botão vai.
    li.innerHTML += ' '//Coloca um espaço entre o texto e o botão
    let botaoApagar = document.createElement('button')
    botaoApagar.innerHTML = 'Apagar'
    // botaoApagar.classList.add('apagar') -> Cria a classe "apagar"
    botaoApagar.setAttribute('class', 'apagar') //Também seta uma classe
    botaoApagar.setAttribute('title', 'Clique para apagar')
    li.appendChild(botaoApagar)

}
function criaTarefa(textoInput){ //No parâmetro aqui, você estará colocando o texto inserido dentro do input ao clicar no botão, conforme estabelecido na linha 7.
    const li = criaLi()
    li.innerText = textoInput //innerText recebe o texto inserido
    tarefas.appendChild(li)
    limpaImput()
    criaBotaoApagar(li) //recebe o li criado nesta função.
    salvarTarefa() //Salva a tarefa
}

document.addEventListener('click', function(e){
    const elemento = e.target
    if (elemento.classList.contains('apagar')){//Se este elemento contém a classe apagar.
        elemento.parentElement.remove()//Remove o pai do elemento.
        salvarTarefa()
    } 
})

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li'); //Seleciona todos os lis dentro de tarefas
    const listaDeTarefas = []
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim() //trim remove espaço sobrando nas pontas
        listaDeTarefas.push(tarefaTexto)
        console.log(tarefaTexto)
        //para salvar as tarefas nós criamos um arquivo JSON. Os arquivos JSON são formatos de texto que utilizamos para salvar dados entre sistemas. A ideia neste exercício é tranformar o array em uma string em JSON e depois poder manipular do jeito que quiser e voltar a converter essa string em um array. 
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas) //Vai transformar a lista de tarefas em uma string.
    localStorage.setItem('tarefas', tarefasJSON) //recupera tarefas. 
    console.log(listaDeTarefas)
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas) //converte as tarefas novamente para um array
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas()