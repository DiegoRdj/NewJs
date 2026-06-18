function saudacao(nome) { //Parametros (), sao basicamente variaveis 
    //Tudo aq dentro, pertence a função
    return `Bom dia ${nome}!` // melhor sempre usar return
}

saudacao("PERSONA"); //Chamou a função, precisa dos () para saber q a função esta sendo executada
//dentro dos () , é onde vc define a variavel
saudacao("JOKERRR")
const variavel = saudacao("MAKOTO");
console.log(variavel); // retorna somente se a função tiver retorno

function soma(x = 1, y= 1) { //colocamos parametros para ele assumirem um numero e  nao ficar vazio
    const resultado = x + y
    return resultado;
}
console.log(soma(10, 20));

const resultado = soma(10, 5)
console.log(resultado);

const raiz =  function(n) {
    return n ** 0.5;
}; // aq precisa de ;

console.log(raiz(9));


//Arrow Function, msm coisa do de cima
const raiz2 = (n) => {
    return n ** 0.5;
};

console.log(raiz(25));


// Se tiver so uma linha na função
const raiz3 = n => n ** 0.5;
//se tiver so um parametro, pode remover os paranteses

//Não é interessante uma função q faça 300 coisas diferentes


