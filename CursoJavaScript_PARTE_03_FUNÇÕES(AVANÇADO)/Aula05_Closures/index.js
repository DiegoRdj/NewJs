function retornaFuncao() {
    const nome = "PERSONA";
    return function () {
        return nome
    };
}

const funcao = retornaFuncao("persna");
const funcao2 = retornaFuncao("Algo");
console.dir(funcao);
console.dir(funcao2); // entra no colosure

console.log(funcao, funcao2);

//Closure é habilidade que a função tem de acessar seu escopo lexico      
