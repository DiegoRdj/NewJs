function login(usuario, senha) {
    if (usuario === "usu" && senha === "abc123") {
        return "Boas vindas"
    } else {
        return "ERRO"
    }
}

console.log(login("usu","abc123"));
