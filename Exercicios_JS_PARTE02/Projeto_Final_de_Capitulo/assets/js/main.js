let lista = document.querySelector("#lista")
let btn = document.querySelector("#btn")
let tarefa = document.querySelector("#tarefa")

function criarLi() {
    const li = document.createElement("li")
    return li
}

function limparInput() {
    tarefa.value = ""
    tarefa.focus();
}

function criarBotaoApagar(li) {
    li.innerText += " "
    const botaoApagar = document.createElement("button");
    botaoApagar.innerHTML = "Apagar"
    // escreve dentro do botao apagar
    botaoApagar.setAttribute("class", "apagar")
    li.appendChild(botaoApagar)
    botaoApagar.addEventListener("click", function(){
        li.remove()
    })
}

function criarTarefa(tarefa) {
    const li = criarLi()
    li.innerText = tarefa

    criarBotaoApagar(li)

    lista.appendChild(li)

    limparInput()
}

btn.addEventListener("click", function (e) {
    if(!tarefa.value) return // valida se esta vazio
    criarTarefa(tarefa.value)
});


