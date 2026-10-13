function IdadeECarteira(idade, temCarteira) {
    if (idade >= 18 && temCarteira === true) {
        return "Pode dirigir"
    } else {
        return "Não pode dirigir"
    }
}

console.log(IdadeECarteira(10, true));
