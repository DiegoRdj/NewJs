/**
 * Primitivos (Imutaveis) - String, number, boolean, undenied, null (bigint, symbol) - Valores Copiados
 * 
 * Referencia (Mutaveis) - Array, object, function - Passados por referencia
 */

let nome = "Yu";
nome = "Makoto"
console.log(nome);

let a = [1,2,3];
let b = [...a]; //copiou o array de A
let c = b
console.log(a,b);

a.push(4)
console.log(a, b); //A e B apontam para o msm valor em memoria

b.pop();
console.log(a, b);

a.push('Luiz')
console.log(a,c);

const a1 = {
    nome: "Makoto",
    sobrenome: "Yuki"
};
const b1 = {...a1}; // copiou o objeto

a1.nome = "Joao"
console.log(a1);
console.log(b1);

//Maior difernça entre eles é q primitivos sao copiados qnd vc usa = ex a = b
// Apontam para o msm vaslor em memoria qnd usar =


