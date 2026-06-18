function somar(){
    let num1 = document.querySelector("#num1").value
    let num2= document.querySelector("#num2").value
    num1 = Number(num1)
    num2 = Number(num2)
    let res = document.querySelector("#resultado")
    res.innerHTML = `<p>${num1 + num2}<p>`       
}