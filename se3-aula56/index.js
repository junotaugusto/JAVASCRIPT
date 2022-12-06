//SEÇÃO 3 - AULA 56 - FOR OF
//FOR LOOP NORMAL (COM IF)
let nome = 'Junot Augusto'
console.log('UTILIZANDO O FOR CLÁSSICO!!!')
for (let i = 0; i < nome.length; i++) {
    if (nome[i] === ' ') {
        console.log(`index: ${i} = espaço em branco`)
    } else {
        console.log(`index: ${i} = letra ${nome[i]}`)
    }
}
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('UTILIZANDO O FOR IN')
//UTILIZANDO FOR IN (COM IF)
for (i in nome) {
    if (nome[i] === ' ') {
        console.log(`index: ${i} = Espaço Vazio`)
    } else {
        console.log(`index: ${i} = letra ${nome[i]}`)
    }
}
//QUANDO EU TENHO UM OBJETO ITERÁVEL COMO É O CASO DA STRING, OU VETOR, OU ARRAY, OU OBJETO ETC, UTILIZAMOS FOR OF PARA SABER O VALOR AO INVÉS DO ÍNDICE. 
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('UTILIZANDO O FOR OF')
for (let valor of nome){
    if(valor === ' '){
        console.log('espaço em branco')
    } else {
    console.log(`letra ${valor}`); }
}
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
//UTILIZANDO FOR EACH COM ARRAY. O FOR EACH VAI RECEBER UMA FUNÇÃO QUE MOSTRA O VALOR, O ÍNDICE E O ARRAY INTEIRO. SÃO OPCIONAIS, VOCÊ DECIDE O QUE QUER, MAS A ORDEM É SEMPRE ESSA.
let lista = ['Junot', 'Lucas', 'Renata', 'Neto', 'Alice'];
lista.forEach(function(valor){
    console.log(valor)
});
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('FOR CLÁSSICO - GERALMENTE COM ITERÁVEIS (ARRAYS OU STRINGS).\nFOR IN - RETORNA O ÍNDICE OU CHAVE (STRINGS, ARRAYS OU OBJETOS). \nFOR OF - RETORNA O VALOR EM SI (ITERÁVEIS, ARRAYS OU STRINGS).')