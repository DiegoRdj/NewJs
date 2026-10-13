let calc = document.querySelector("#calc");

calc.addEventListener("click", function(){
    let txt = document.querySelector("#txt").value
    let qnt = document.querySelector("#qnt")
    let frase = document.querySelector("#frase")
    
    let qntC = txt.length
    frase.innerHTML = "FRASE: " + txt
    qnt.innerHTML = "Quantidade de caracteres: " + qntC

});