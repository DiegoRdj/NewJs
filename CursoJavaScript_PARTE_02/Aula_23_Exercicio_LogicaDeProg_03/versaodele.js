// Escreva uma que recebe um numero e retorne o seguinte
// Numero é divisivel por 3 = Fizz
// Numero é divisivel por 5 = Buzz
// Numero é divisivel por 3 e 5 = FizzBuzz
// Numero não é divisivel por 3 = retorna o proprio numero
// checar se o numero é numero é um numero = Retorna o proprio numero
// Use a função com numeros de 0 a 100

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'; 
    if (numero % 3 === 0) return 'Fizz'; 
    if (numero % 5 === 0) return 'Buzz'; 
    return numero
}
console.log('a', fizzBuzz('a'));

 for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
    
 }