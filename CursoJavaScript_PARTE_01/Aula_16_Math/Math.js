let num1 = 9.5342
let num2 = Math.floor(num1) //Arredonda para baixo = 9
let num3 = Math.ceil(num1) // Arredonda para cima = 10
let num4 = Math.round(num1) // Arreddonda para o mais proximo
console.log(num2);
console.log(num3);
console.log(num4);

console.log(Math.max(1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 1500)) // Pega o maior numero da sequencia
console.log(Math.min(1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 1500)) // Pega o menor numero da sequencia
console.log(Math.random()); // Gera qualquer numero de 0 a 1

const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);


console.log(Math.pow(2, 10)); // Eleva o numero a outro numero
console.log(2 ** 10); // mesma coisa do pow

console.log(num2 ** (1/2)); // Pegar raziz quadrada
console.log(num2 ** 0.5); // Pegar raziz quadrada

console.log(100/0); // Infinity


