const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
]

const container = window.document.querySelector('.container');
const div = window.document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i]
    let tg = document.createElement(tag);
    tg.innerHTML = texto
    div.appendChild(tg)
}

container.appendChild(div)
