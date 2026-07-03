
const lista = document.querySelector('#lista')
const afazeres = document.querySelector('#afazeres')
 let inputTarefa = document.querySelector('#tarefa')


function botao(){
    let tarefa = inputTarefa.value;
  
    if (tarefa.trim() === "") return; // Evita adicionar tarefas vazias 

    let li = document.createElement("li");
    li.textContent = tarefa + " ";

    let botaoApagar = document.createElement("button")
    botaoApagar.textContent = "Apagar"
    

    botaoApagar.addEventListener('click', function(){
        li.remove()
    })

    li.appendChild(botaoApagar);
    afazeres.appendChild(li)
    
    inputTarefa.value = " ";
} 