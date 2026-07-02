let  a = 'A' // B
let  b = 'B' // C
let  c = 'C' // A

const letras = [b, c, a]; // sempre colocar ponto e virgula!!!!!
[a, b, c] = letras; //oq esta do lado esquerdo é a  desestruturação

console.log(a, b, c);

//               0      1      2     3     4    5     6      7     8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const [primeiroNumero, ,terceiroNumero, ,quintoNumero, ,SetimoNumero, ...resto] = numeros 
//Criando variavel, pegando o 0 e 1 do array
//... pega o resto
// os espaços  atraves das , , pula os numeros
console.log(primeiroNumero, terceiroNumero, terceiroNumero, quintoNumero); // = 1 2
console.log(resto);

//... : se chama rest, qnd usa em espalhar, se chama spread...
//     0        1         2
//   0 1 2    0 1 2    0 1 2;
const numbers = [
    [1,2,3], [4,5,6], [7,8,9]
];
console.log(numbers[1][2]); // pegou o sexto numero
const [, [,,seis]] = numbers //Via destruturação
console.log(seis);



