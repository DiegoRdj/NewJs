// Escopo lexico

const nome = "PERSONA"

function falaNome() {

    console.log(nome);

}

// a função conhece o local a onde ela foi declarada e tduo q esta dentro dela e oq ta nos vizinhos dela

function falaNome() {
    console.log(nome);
    
}
function usaFalaNome() {
    const nome = "PERSONE" // ignrou a variavel 
    falaNome()
    // pode dboa
}
usaFalaNome()