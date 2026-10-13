// Declarando função (Function Hoisting)
// Hoisting significa: eleva as declarações de funçoes e variaveis declaradasa pelo var no topo do js

falaOi()
function falaOi() {
    console.log("Oi");
}

// First-class objects (Objetos de Primeira classe)
// Function Expression = usar function na variavel 

const souUmDado = function () {
    console.log("Sou um dado");    
};

// isso é bom pq virou uma variavel, ent da para fazer como parametro de uma função

function executaFuncao(funcao) {
    funcao();
};
executaFuncao(souUmDado)

// Arrow Function

const funcaoArrow = () => {
console.log("Sou uma Arrow Function");
    
};

// Dentro de um obejto
const obj = {
    falar () {
        console.log("Estou falando...");
    }
};
obj.falar();