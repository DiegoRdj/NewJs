let numeros = [1,2,23,4,6,6,7,8,9,10]
let maior = numeros[0]
for (let i = 0; i < numeros.length; i++) {
 if (maior < numeros[i]) {
    maior = numeros[i]
 }
}
console.log(`O maior numero é: ${maior}`);
