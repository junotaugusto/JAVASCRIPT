// Um operador ternário em JavaScript é simplesmente uma interrogação e dois pontos.

// ? (valor para verdadeiro)
// : (valor para falso)

// Isso pode substituir partes do seu códigos ou incurtar bastante o código em partes utilizando um if e else, por exemplo.
// Um exemplo seria um site onde exitem pontuações dos usuários e, dependendo dessa pontuação, ele recebe uma flag diferente. 

//SEM OPERADOR TERNÁRIO
const pontuacaoUsuario = 999; 

if(pontuacaoUsuario >= 1000){
    console.log('Usuário VIP')
} else {
    console.log('Usuário normal')
}

//UTILIZANDO OPERADOR TERNÁRIO
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUsuario)

//A única diferença entre os dois códigos é que no segundo foi atribuída uma variável aos valores da condição if, podendo utilizá-la em qualquer lugar do sistema e, no primeiro exemplo, nenhuma variável foi criada para a condição, já exibindo os valores diretamente na tela. 

// UTILIZANDO COM A CONDIÇÃO OU
const corFundoUsuario = null //Se o usuário não escolher nenhuma cor
const corPadrao = corFundoUsuario || 'Preto'; 
//Se o usuário não escolher a cor (null), a variável corPadrao irá "setar" um valor padrão para a variável corFundoUsuario. Ou seja, a variável corFundoUsuario é checada e, se ela for nula, é atribuído um valor padrão, um fallback. 
console.log(nivelUsuario, corPadrao);

//Exemplificando, se a corFundoUsuario não for nula e qualquer valor for atribuído à essa variável, ele não irá para o fallback, para o padrão.