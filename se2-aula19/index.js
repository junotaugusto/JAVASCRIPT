//SEÇÃO 2 - AULA 19 - TIPOS DE DADOS PRIMITIVOS

console.log('Já vimos alguns tipos de dados primitivos como STRING, NUMBER, UNDEFINED...');
console.log('');
console.log('Podemos criar alguns templates utilizandos as variáveis também conforme abaixo:');
console.log('');


const nome = 'Junot Augusto';
const idade = 39;
const estadoCivil = 'casado';
const conjuge = 'Renata Cordeiro';

console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade e sou ${estadoCivil} com ${conjuge}. `);

const nome1 = 'Rony'; //STRING
const num1 = 10; //NUMBER
const peso = 80.5; //NUMBER
let nomeJogador; //UNDEFINED (Somente declarada). -> Não aponta para local nenhum na memória
let sobrenomeJogador = null; // NULO -> Não aponta para local nenhum na memória.

const boolean1 = true; //Boolean
const boolean0 = false; //Bolean

console.log('');
console.log('A diferença entre NULO e UNDEFINED é que quando nós utilizamos nulo, nós é que definimos que queremos que aquela variável não aponte para local nenhum da memória. Quando a variável é UNDEFINED, não somos nós que definimos que a variável não tem definição nenhuma, é o próprio "motor" do JavaScript. A ideia é a de que, sempre que precisar definir que uma variável seja nula, nós utilizamos o null. O valor nulo pode ser definido como uma constante também porque ele possui uma definição.')

