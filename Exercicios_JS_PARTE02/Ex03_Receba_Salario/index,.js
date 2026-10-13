function RecebeSalario(salario) {
    if (salario < 2000) {
        return "Salario menor que 2000"
    } else if (salario <= 5000) {
        return "Salario entre 2000 e 5000"
    } else {
        return "Maior que 5000"
    }
}

console.log(RecebeSalario(4000));
