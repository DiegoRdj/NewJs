function maiorNumero(num1, num2){
    if (num1 > num2) {
        return `O maior numero foi ${num1} e o menor numero foi ${num2}`;
    } else {
        return `O maior numero foi ${num2} e o menor numero foi ${num1}`;
    }
}
console.log(maiorNumero(90, 32));
