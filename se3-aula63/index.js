//SEÇÃO 3 - AULA 63 - TRATANDO E LANÇANDO ERROS (TRY, CATCH, THROW)

// try {
// console.log(variavel); //erro de variável não definida
// } catch(err) {
//     console.log(`Variável não existe`);
//     console.log(err) //essa variável exibe o erro.
// }

//Lançando erros:

function soma(n1, n2){
    if (typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error ('Digite um número para a soma!') //jogou o erro
    } 
    return n1 + n2 
}
try {
console.log(soma(1,10))
console.log(soma('1', 10))
} catch(erro){ //pegou o erro e atribuiu a uma variavel entre ()
    console.log(erro) //exibe o erro, se necessário.
}