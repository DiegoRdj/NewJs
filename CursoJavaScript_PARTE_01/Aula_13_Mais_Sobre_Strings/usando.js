// é indexivael: 0 1 2 3 4 5 6 7

let umaString = "Um \"texto\"";
let outraString = "O rato roeu a roupa do rei de roma"

console.log(umaString[8]); // vai percorrer o texto e mostrar a letra na 9 posição = o
console.log(umaString.concat(" ", "Em", " ", "um", " ", "Lindo dia")); // MESMA COISA DE UM + 
console.log(umaString + " Em um lindo dia"); // concatenou  
console.log(`${umaString} em um lindo dia`); // melhor!  
console.log(umaString.indexOf("texto")); // Procurando o indice, onde esta a palavra, neste caso = 4  
console.log(umaString.indexOf("o", 2)); // vai procurar o O a partir da posição 3
console.log(umaString.lastIndexOf("m", 2)); // vai procurar do final ate o começo 
console.log(umaString.match(/[a-z]/g)); // sla 
console.log(umaString.search(/[a-z]/g)); // sla tbm  
console.log(umaString.replace("Um", "Outro")); // Muda o texto - Um virou Outro  
console.log(outraString.replace(/r/g, "Outro")); // Muda todos os R por Outro  
console.log(umaString.length) //ve o tamanho da String, quantas letras tem
console.log(umaString.slice(2, 10)) // ele corta a frase do começo ate onde vc quer
//  começou do 2 e terminou no 10 = "texto"
console.log(umaString.slice(-3)) // começa do final, funciona com length tambem
console.log(umaString.split(" ")) // separou em um array por cada espaço 
console.log(umaString.split(" ", 2)) // separou em um array por cada espaço somente 2 vezes!
console.log(umaString.toUpperCase()) // deixar em maisculo
console.log(umaString.toLowerCase()) // deixar em minusculo

