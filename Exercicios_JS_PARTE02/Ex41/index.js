
function conta() {
    let senhaReal = "abc123";
    let bool = false
    let senha;
    senha = prompt("Digite sua senha: ")
        

    while (senha !== senhaReal) {
    alert("Senha incorreta")    
    senha = prompt("Digite sua senha: ")
    
}

    alert("Senh correta")
}
conta()