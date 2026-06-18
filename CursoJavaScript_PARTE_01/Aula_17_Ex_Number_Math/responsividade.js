// Meu jeito

let sn = document.getElementById("sn")
let sne = prompt("Digite um numero")
let num = Number(sne);
document.body.style.fontSize = "1.5em"
sn.innerHTML = "Seu numero é: " + num;
document.body.innerHTML += `Raiz Quadrada: ${num * 0.5} <br><br>`
document.body.innerHTML += `${num} é inteiro? ${Number.isInteger(num)} <br><br>`
document.body.innerHTML += `É um NaN? ${Number.isNaN(num)} <br><br>`
document.body.innerHTML += `Arredondado para baixo: ${Math.floor(num)} <br><br> `
document.body.innerHTML += `Arredondado para cima: ${Math.ceil(num)}  <br><br>`
document.body.innerHTML += `Com duas casas decimais: ${num.toFixed(2)} <br><br>`
