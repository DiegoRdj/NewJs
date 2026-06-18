function gerar(){
    let nome = document.querySelector("#nome").value
    let idade = document.querySelector("#idade").value
    let cidade = document.querySelector("#cidade").value
    let resultado = document.querySelector("#resultado")

    resultado.innerHTML = `<p>Nome: ${nome}<br> Idade: ${idade} <br> Cidade: ${cidade}</p>`
    
}