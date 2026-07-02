const verdadeira = true;

// let tem escopo de bloco { ... bloco }
// Var so tem escopo de funcao

let nome = "Makoto" //Nao pode ser redeclarada
var nome1 = "Makoto" // Pode ser redeclarada

if (verdadeira) {
    let nome = "Yuki"; // criando
    var nome2 = "Ren"; // redeclarando
    console.log(nome, nome1);
    
    if (verdadeira) {
        var nome1 = "Yu" // reclerando
        console.log(nome, nome1);
        
    }
    
}

var sobrenome = "Kuma"

function falaOi(){
    var nome = 'Teddie'
    console.log(nome, sobrenome);
    //Funcao sabe sobre as variaveis fora da função   
}

falaOi()

console.log(name)

var name = "Ren" // ele declara a variavel la no topo, somente com VAR