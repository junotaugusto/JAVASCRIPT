//SEÇÃO 3 - AULA 64 - TRY CATCH FINALLY

try {
    //Parte executada quando não há erros.
    console.log(a) //variável inexistente
} catch (e) {
    //Parte executada quando há erros.
    console.log('Variável não existe')
} finally {
    //Parte executada sempre. 
    console.log('Qualquer coisa')
}

try {
    for(let i = 0 ; i < 10; i++){
        console.log(i)
    }
} catch (erro){
    console.log('Erro no laço')
} finally {
    console.log (`Laço exibido com sucesso!`)
}

function retornaHora(data){
    if (!(data instanceof Date)){ //se o argumento data for diferente da istância de Date...
        throw new TypeError ('Esperando instância de data')
    }
        return data.toLocaleTimeString('pt-BR', {
            hour: '2-digit', //zero à esquerda
            minute: '2-digit',
            second: '2-digit',
            hour12: false //Muda para horas de 0 a 23 ao invés de 1 a 12
        })
}
console.log(retornaHora())