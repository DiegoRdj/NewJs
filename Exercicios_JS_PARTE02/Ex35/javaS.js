let contador = document.querySelector("#contador");
let soma = document.querySelector("#soma");
let menos = document.querySelector("#menos");
let reset = document.querySelector("#reset");
let i = 0;
soma.addEventListener("click", function(){
    i++
    contador.innerHTML = "CONTADOR: " + i
});
menos.addEventListener("click", function(){
    i--
    contador.innerHTML = "CONTADOR: " + i
});
reset.addEventListener("click", function(){
    i = 0
    contador.innerHTML = "CONTADOR: " + i
});