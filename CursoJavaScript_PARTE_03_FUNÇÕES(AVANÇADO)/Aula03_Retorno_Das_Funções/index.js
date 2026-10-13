// return
// Retornar um valor
// terminar a função
function soma(a, b) {
    return a + b;
}

function soma2(a,b) {
    alert(a + b)
}

//document.addEventListener("click", function(){
//document.body.style.background = "red   "
//});

function criarPessoa(nome, sobrenome) {
    return {nome, sobrenome} //pelo nome ser igual, nao precisa fazer nome:
}
const p1 = criarPessoa("SHIN", "MEGAMI");
const p2 = {
    nome: "PERSONA",
    sobrenome: "GOLDEN"
} // p1 e p2 sao objetos

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + " " + resto
    }
    return falaResto
}

const fala = falaFrase("Olá")
const resto = fala("Mundo!")


console.log(resto);


// funcao dentro de funcao

function criarMultiplicador(multiplicador){
// multipicador
    return function(n) {
        return n * multiplicador;
    };
    
}
const duplica = criarMultiplicador(2);
const triplica = criarMultiplicador(3);
const quadriplica = criarMultiplicador(4);

console.log(duplica(10)); // ele recebe o n da funcao
console.log(triplica(2));
console.log(quadriplica(2));
