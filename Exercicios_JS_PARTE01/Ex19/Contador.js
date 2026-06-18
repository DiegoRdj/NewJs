// Refazer

let num = 0

function contar(){
    let id = document.querySelector("#id")
    num += 1
    id.innerHTML = `${Number(num)}`
}