let btn = document.querySelector("#btn")
let paragrafo = document.querySelector("#paragrafo")
btn.addEventListener("click", function (e) {
    e.preventDefault()
    let texto = document.querySelector("#text").value 
    paragrafo.innerHTML = "Boas vindas " + texto
})