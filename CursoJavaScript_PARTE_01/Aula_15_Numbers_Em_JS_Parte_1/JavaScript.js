// IEEE 754-2008
// Imprecisao nas contas

let num1 = 1500; // Number
let num2 = 2.5; // Number
let num3 = 10.344324343
let num4 = 0.7
let num5 = 0.1

num4+= num5
num4+= num5
num4+= num5
num4+= num5
num4+= num5
num4+= num5
num4+= num5
num4+= num5
num4+= num5
num4+= num5
num4+= num5
num4+= num5
num4+= num5

num4 = parseFloat(num4.toFixed(2))

console.log(num4)
console.log(Number.isInteger(1.00))

console.log(num1.toString() + num2)
 // To string tranforma em string, ent concatena o num 1 num 2 = 12.5
 //num1 += num1.toString Tranformou num1 em String 

console.log(num1.toString(2)) // O 2 transforma em binario
console.log(num3.toFixed(2)) // to fixed arredonda e dentro do () é ate qnt
console.log(Number.isInteger(num1)) // Ver se é Inteirou ou nao true || False
console.log(Number.isInteger(num2))
let temp = num1 * "ola";
console.log(Number.isNaN(temp)) // Perguta se é um NaN = true (Não é um numero)



