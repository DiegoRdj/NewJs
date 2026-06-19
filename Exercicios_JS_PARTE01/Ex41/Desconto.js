function desconto(num1, num2){
    num2 = num2 / 100
    let desconto = num1 * num2
    return num1 - desconto
}
console.log(desconto(100, 10));
