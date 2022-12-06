//SEÇÃO 3 - AULA 55 - FOR IN

const frutas = ['Banana', 'Maçã', 'Uva', 'Laranja', 'Limão'];
//MODO TRADICIONAL COM ARRAY
// for (let i = 0; i < frutas.length; i++) {
//     console.log(`i = ${i} - valor = ${frutas[i]}`)
// }

//FOR IN COM ARRAY
for(let i in frutas){
    console.log(`i = ${i} - valor = ${frutas[i]}`);
}

//FOR IN COM OBJETO
const pessoa = {
    nome: 'Junot',
    sobrenome: 'Patrial',
    idade: 40,
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}