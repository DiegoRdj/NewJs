//            123456
const nome = ["Bi Han", "Hanzo Hasashi", "Kabal"] 

console.log();
console.log("+======= for ======+");
console.log("");


for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log();
console.log("+======= for in ======+");
console.log();


for (let i in nome){
    console.log(nome[i]);
    
}

// For of 
//quando tem um objeto interavel = string, array, vetor ou matriz

console.log();
console.log("+======= for of ======+");
console.log();

for (const valor of nome) {
    console.log(valor);
    
}


console.log();
console.log("+======= for each ======+");
console.log();

//                    valor  indice  array completo
nome.forEach(function(valor, indice, array) {
    console.log(valor, indice);
    
});

const pessoa = {
    nome: "Kuai",
    sobrenome: "Liang"
};

console.log();

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
    
}


// Qual utilizar?
// para arrays -> os 3 vao funcionar!
// para objetos -> FOR IN

/**
 * For classico - Geralmente com Interveis (array ou Strings)
 * For In - Retorna o Indice ou chave (String, array ou objetos)
 * for of - Retorna o valor em si (intervaeis, arrays ou Strings)
 */
