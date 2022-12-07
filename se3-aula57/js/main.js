let paragrafos = document.querySelector('.paragrafos') // Puxou pela classe

let p = paragrafos.querySelectorAll('p'); //Selecionou todos os elementos "p" do NodeList. Lembrando que NodeList não é um array, mas se comporta como um, por isso, o querySelectorAll selecionou todos os elementos dentro do NodeList.

//pegando os estilos computados do css do body:
const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor; //Atribuindo a cor do background do body à variável backgroundColorBody
console.log(backgroundColorBody)
//OUTRA SOLUÇÃO QUE FIZ:
// for(let i = 0; i < p.length ; i++){ 
//     // iterando dentro do objeto selecionado e mexendo nos estilos abaixo.
//     if(i === 0){
//         p[i].style.backgroundColor = backgroundColorBody

//     } else if(i===1){
//         p[i].style.backgroundColor = 'lightGrey'
//     } else if(i ===2){
//         p[i].style.backgroundColor = 'orange'
//     } else if(i ===3){
//         p[i].style.backgroundColor = 'darkgreen'
//         p[i].style.color = 'white'
//     }
// }

//SOLUÇÃO ANTERIOR:
for (i of p){
    i.style.backgroundColor = backgroundColorBody;
    i.style.borderRadius = '8px'
    i.style.padding = '8px';
    i.style.color = '#FFFFFF'
    i.style.fontStyle = 'italic'
}
