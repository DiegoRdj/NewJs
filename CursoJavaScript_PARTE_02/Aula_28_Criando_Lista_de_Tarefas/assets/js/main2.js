const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
    let li = document.createElement('li')
    return li; //criou e retornou LI
}

function limpaInput() {
    inputTarefa.value = ""
    inputTarefa.focus() //evento de html q coloca o cursor la
}

function criaBotaoApagar(li) {
    li.innerText += " "
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = "Apagar"
    botaoApagar.setAttribute('class', 'apagar') //criou uma class com o valor apagar
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInput();
    criaBotaoApagar(li)
    salvarTarefa();
}


inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return //Validando se estiver vazio
        criaTarefa(inputTarefa.value) //Pegando o valor do input

    }

}) //Para pegar o pressionar da tecla

btnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return //Validando se estiver vazio
    criaTarefa(inputTarefa.value) //Pegando o valor do input

});

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('apagar')) { //checa se o elemento contem a classe apagar
        el.parentElement.remove() //pai dele sera removido, logo ele tambem é removido     
        salvarTarefa()
    }
});

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim() // muda o apagar para nada, trim tira o espaço
        listaDeTarefas.push(tarefaTexto)  
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas) //converteu para JSON em String
    localStorage.setItem('tarefas', tarefasJSON) //so pode salvar Strings, por isso passou de JSON
    
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(listaDeTarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas()