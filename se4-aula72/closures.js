//SEÇÃO 4 - AULA 72 - CLOSURES

//Os closures estão relacionados ao escopo lexico. Closure é a habilidade de uma função em acessar o seu escopo lexico.
function retornaFuncao(){
    const nome = 'Junot';
    return function(){ //função anônima
        return nome
    }; 
}
const funcao = retornaFuncao()
console.dir(funcao);