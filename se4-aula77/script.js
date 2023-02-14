//SEÇÃO 4 - AULA 77 - FUNÇÕES CONSTRUTORAS

//EXEMPLO DE FACTORY FUNCTION
/*
function personagem(classe, raca, forca, dext, cons, wisd, inte, caris) {
    return {
        classe: classe,
        raca: raca,
        forca: forca,
        dext: dext,
        cons: cons,
        inte: inte,
        wisd: wisd,
        caris: caris,
        falaPersonagem() {
            console.log(`Personagem criado com sucesso! \n
            Seu personagem é da raça ${raca}, da classe ${classe}. Seus atributos são:  \n 
            STR: ${forca} \n
            DEX: ${dext} \n
            CON: ${cons} \n
            INT: ${inte} \n
            WIS: ${wisd} \n
            CHA: ${caris} \n`)
        }
    }
}

let persLeo = personagem('Arqueiro', 'Elfo', 10, 18, 14, 10, 14, 14);
persLeo.falaPersonagem()
*/

//Função Construtora -> Sempre começa com letra maiúscula, precisa usar a palavra new

function Pessoa(nome, sobrenome) {
        this.nome = nome,
        this.sobrenome = sobrenome;
    }

let p1 = new Pessoa('Junot', 'Patrial Cordeiro')
let p2 = new Pessoa('Renata', 'Lemes Cordeiro')
let p3 = new Pessoa('Dudu', 'Da Silva')

console.log(`Olá, meu nome é ${p3.nome} ${p3.sobrenome}`)

//A Palavra new cria um novo objeto vazio e faz com que a palavra this aponte para o objeto que está sendo utilizado. Por isso, não precisa de return. 