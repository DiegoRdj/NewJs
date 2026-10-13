function podeEntrar(idade, estaAcompanhado) {
    if (idade < 16 && estaAcompanhado === true) {
        return "Pode entrar no cinema"
    } else if (idade < 16 && estaAcompanhado === false) {
        return "Não pode entrar no cinema"
    } else if (idade >= 16 && estaAcompanhado === false) {
        return "Pode entrar no cinema"
    } else {
        return "Pode entrar no cinema"
    }
}

console.log(podeEntrar(40, true));
