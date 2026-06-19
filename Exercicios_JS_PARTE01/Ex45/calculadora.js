function calculadora(numero1, numero2, operador){
    const num1 = Number(numero1)
    const num2 = Number(numero2)
    if (operador == "+") {
        return num1 + num2
    } else if(operador == "-") {
        return num1 - num2
    } else if(operador == "*"){
        return num1 * num2
    } else if(operador == "/"){
        return num1 / num2
    }
}
console.log(calculadora(10, 5, "+"));
console.log(calculadora(20, 5, "-"));
console.log(calculadora(10, 8, "*"));
console.log(calculadora(250, 5, "/"));
