let executarOperacao = (a, b, operacao) => {
    if (operacao == "+") {
        return a + b 
    } else if(operacao == "-"){
        return a - b
    } else if(operacao == "*"){
        return a * b
    }else if(operacao == "/"){
        return a / b
    }
}
executarOperacao(10, 5, (a, b) => a + b);
executarOperacao(10, 5, (a, b) => a * b);