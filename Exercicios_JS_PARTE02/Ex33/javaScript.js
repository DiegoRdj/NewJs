let trocarCor = document.querySelector("#trocarCor")

trocarCor.addEventListener("click", function(){

let cor = document.querySelector("#pegarCor").value    

document.body.style.backgroundColor = cor
});