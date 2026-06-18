function verificar(){
    let idade = document.querySelector("#idade").value
    let mostrar = document.getElementById("mostrar")
    idade = Number(idade)
    if(idade < 0 || idade > 130){
         mostrar.innerHTML = `<p>Idade Invalida</p> `
    } else if(idade >= 18){
        mostrar.innerHTML = `<p>Maior de Idade</p> `
    } else if(idade < 18) {
         mostrar.innerHTML = `<p>Menor de Idade</p> `
    } 
}