//SEÇÃO 2 - AULA 34 - EXERCÍCIO

// Tudo o que fizemos neste exercícios envolvemos dentro de uma função porque as funções são protegidas e as informações que constarem nelas não correm o risco de se confrontarem com dados de uma biblioteca baixada no site, por exemplo.

// 
function cadastro () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    /*form.onsubmit = function (evento) {
        evento.preventDefault() //Previne o que aconteceria por padrão. 
        console.log('Foi enviado')
    };
    }*/
    const lista = []
    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome'); 
        const sobrenome = form.querySelector('.sobrenome'); 
        const peso = form.querySelector('.peso'); 
        const altura = form.querySelector('.altura'); 
        //Aqui, o form é a variável de cima, que se refere ao formulário dentro do corpo do html.
        lista.push({  //inserindo o objeto aqui dentro
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value 
        });
        console.log(lista);

        resultado.innerHTML += `<p>Nome: ${nome.value} - Sobrenome: ${sobrenome.value} - Peso: ${peso.value} - Altura: ${altura.value}</p>`

    };
    form.addEventListener('submit', recebeEventoForm);
}
cadastro();

//querySelector seleciona os elementos como selecionaríamos classes em CSS. Poderíamos usar getElementByClassName também. Neste caso, se inserirmos apenas form, ele seleciona a tag, por isso, colocamos o ponto antes de form, para que ele saiba que se refere à classe form.