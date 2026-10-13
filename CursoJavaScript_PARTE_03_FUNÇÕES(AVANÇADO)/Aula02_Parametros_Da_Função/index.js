// Argumentos que sustenta todos os argumentos enviados

function funcao(a, b, c) {
    let total = 0
    for (let argumento of arguments) {
        total += argumento;
    }
console.log(total, a,b,c);

    // usando arguments, ele pega tudo q vc colocou de variavel ou o resto, so funciona em function
}

funcao(1,2,3,4,5,6,7,8,9)

function funcao2(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f);
    
}
funcao2(1,2,3)

function funcao3(a, b = 2, c = 4) { //isso aq da o valor caso b NAO SEJA ENVIADO
    
    // b = b || 0; ve se o B existe
    
    console.log(a + b + c);
}
funcao3(2, null, 9); // o null conta como 0

function funcao4({nome, sobrenome, idade}){ // destruturação
    console.log(nome, sobrenome, idade);
    
}
let obj = {nome: "PERSONA", sobrenome : "5", idade : 6}
funcao4(obj)

//desestruturação de array
function funcao5 ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
    
}

funcao5(["PERSONA", "GOLDEN", 10])

const conta = function(operador, acumulador, ...numeros){  // ... resto
    
    for (let numero of numeros) {
    if(operador === "+") acumulador += numero;
    if(operador === "-") acumulador -= numero;
    if(operador === "*") acumulador *= numero;
    if(operador === "/") acumulador /= numero;
    
}
    console.log(acumulador);
    
};
conta("+", 1, 20,30,40,50);