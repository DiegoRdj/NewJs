function validarEmail(email) {
  const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return padrao.test(email);
}

function botao(){let btn = document.querySelector("#btn")
let p = document.querySelector("#pTxt")
btn.addEventListener("click", function () {
    let valor_escrito = document.querySelector("#txt").value 
    if (validarEmail(valor_escrito) == true) {
        p.innerHTML = "Voce se Inscreveu"
    }   else {
        p.innerHTML = "Erro: Voce Não Digitou um Email Aceitavel"
    }
});
}
botao()