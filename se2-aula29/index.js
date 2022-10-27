//SEÇÃO 2 - AULA 29 - ARRAYS BÁSICO

const alunos = ['Maria', 'João', 'Pedro'];
console.log(alunos);
console.log('A ideia é deixar o array apenas com um tipo de dado');
console.log('A indexação so array é um pouco diferente. O índice irá puxar todo o conteúdo que estiver separado por vírgula, ao invés de puxar apenas uma letra, um número etc.');
console.log(alunos[2]); //escolhendo apenas um índica do array.

alunos[1] = 'Wilson';  //Substituindo o valor do índice 1.
console.log(alunos);

alunos[3] = 'Marcos';  //Insere um valor em um índice que não existe.
console.log(alunos);

console.log(alunos.length); //Pra saber o tamanho do array.

alunos[alunos.length] = 'Marcio'; //Insere o valor na última posição do array.
alunos[alunos.length] = 'Elaine';
alunos[alunos.length] = 'Renata';
console.log(alunos);

alunos.push('Leandro');  //adiciona o valor ao final do array.
console.log(alunos);

alunos.unshift('Junot'); //adiciona no começo do array.
console.log(alunos);

alunos.sort() //Coloca em ordem alfabética o array.
console.log(alunos);  //mantém agora em ordem afabética.

const removidoFinal = alunos.pop();
console.log(alunos);  //deleta o último valor do array.
console.log(`O aluno removido do final da lista foi ${removidoFinal}`);  //mostra os que foram removidos.

const removidoComeco = alunos.shift();
console.log(alunos);
console.log(`O aluno removido do começo da lista foi ${removidoComeco}`)

console.log(typeof(removidoComeco, removidoFinal));  //Remove e transforma em String.

const removidos = [];  //Abra uma lista vazia
removidos.unshift(removidoComeco, removidoFinal);  //Insira os alunos removidos em uma lista.
console.log(removidos)  

console.log(alunos);
console.log(alunos.slice(0, 3))  //Fatia o array até o índice 2.

console.log(typeof(alunos));  //Não considera Array, mas sim OBJECT, porque o Array é um objeto indexado.
console.log(alunos instanceof Array); //Perguntando se é array. True.





/*
let lista = ['João', 'Lucas', 'Ana Paula', 'Reginaldo', 'Junior']
let removidosOficina = [];

console.log(lista);

let tirado = lista.shift();
removidosOficina.unshift(tirado);
tirado = lista.shift();
removidosOficina.unshift(tirado);
tirado = lista.shift();
removidosOficina.unshift(tirado);
console.log(lista);
console.log(removidosOficina);
*/







