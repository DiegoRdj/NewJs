function idade(idade) {
    if (idade < 0) {
        return "ERRO"
    }
    else if (idade < 14) {
        return "Criança"
    } else if (idade < 18) {
        return "Adolescente"
    } else if (idade < 60) {
        return "Adulto"
    } else if (idade < 110) {
        return "Idoso"
    } else{
           return "ERRO"
    }
}

console.log(idade(20));
