let btn = document.querySelector("#btn")
let txt = document.querySelector("#txt")

btn.addEventListener("click", function (e) {
    e.preventDefault
    let escrito = document.querySelector("#escrito").value
    txt.innerHTML = "Carregando..."
    setTimeout(() => {
        
        txt.innerHTML = escrito
        
    }, 5000);
});