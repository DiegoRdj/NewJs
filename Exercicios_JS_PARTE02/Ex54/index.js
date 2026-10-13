let btn = document.querySelector("#btn")
let txt = document.querySelector("#txt")

btn.addEventListener("click", function(e){
    txt.innerHTML = "Carregando..."
    setTimeout(() => {
        txt.innerHTML = "Concluido"
        
    }, 3000);
});