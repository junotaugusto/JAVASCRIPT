let paragrafos = document.querySelector('.paragrafos') // Puxou pela classe

let p = paragrafos.querySelectorAll('p'); //Selecionou todos os elementos "p" do NodeList. Lembrando que NodeList não é um array, mas se comporta como um, por isso, o querySelectorAll selecionou todos os elementos dentro do NodeList.

//pegando os estilos computados do css do body:
const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor; //Atribuindo a cor do background do body à variável backgroundColorBody
console.log(backgroundColorBody)
for(let i of p){ // iterando dentro do objeto selecionado e mexendo nos estilos abaixo.
    i.style.backgroundColor=backgroundColorBody;
    i.style.borderRadius = '5px';
    i.style.padding = '8px';
    i.style.textAlign = 'center'
    i.style.fontStyle = 'italic'
    i.style.color = 'white'
}

