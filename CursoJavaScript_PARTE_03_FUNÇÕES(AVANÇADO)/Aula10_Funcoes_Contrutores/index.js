// Função Contrutora retorna (->) objetos
// Funcção Fabrica -> -> Obejtos
// Contrutora -> Pessoa /\ obrigatoriamente tem q ter new 

function Pessoa(nome, sobrenome) { // o Pessoa precisa ser com o P maiusculo
    // Atributos privados -----------
    const ID = 4234234234;

    const metodoInterno = function () {
        
    };
// ----------------------------------

    // Atributos ou metodos privados
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ": Sou um metodo");
        
    }
}

// this pessoa = Pessoa.nome 

const p1 = new Pessoa('JOKER', "PERSONA")
const p2 = new Pessoa('Yu', "Yuki")

p1.metodo();
// o new cria um novo objeto vazio, faz o this apontar para o objeto vazio, sem precisar de return


