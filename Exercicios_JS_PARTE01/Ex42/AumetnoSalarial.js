function aumento(salario, aumento) {
    aumento = aumento / 100
    let taxa = salario * aumento
    return salario + taxa
}
console.log(aumento(2000,20));
