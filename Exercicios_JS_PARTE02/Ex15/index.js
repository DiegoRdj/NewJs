const resultado = document.querySelector("#resultado")
const calc = document.querySelector("#calc")

calc.addEventListener("click", function(e){
    e.preventDefault()
    const n1 = document.querySelector("#n1").value
    const n2 = document.querySelector("#n2").value
   
    resultado.innerHTML = Number(n1) + Number(n2)
    
});