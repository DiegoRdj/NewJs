let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    let txt = document.querySelector("#txt").value;
    let h1 = document.querySelector("#mudarTexto");


    h1.innerHTML = txt
});