// Escreva uma função que recebe 2  numeros e retorna o maior deles

function maior(num1, num2) {
    if (num1 > num2) {
        return `o numero ${num1} é maior q o numero ${num2}`;       
    } else {
        return `o  numero ${num2} é maior q o numero ${num1}`;
    }
}

const max2 = (x,y ) => x > y ? x : y;

console.log(maior(4, 20));
console.log(max2(10, 6));

