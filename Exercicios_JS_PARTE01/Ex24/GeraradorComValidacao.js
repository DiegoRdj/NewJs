function gerar(){
    let nome = document.querySelector("#nome").value
    let idade = document.querySelector("#idade").value
    let resultado = document.querySelector("#resultado")
    idade = Number(idade)
    
    resultado.innerHTML = `<p>Nome: ${nome}<br> Idade: ${idade} <br></p>`
       if(idade < 0 || idade > 130){
         resultado.innerHTML += `<p>Idade Invalida</p> `
    } else if(idade >= 18){
        resultado.innerHTML += `<p>Maior de Idade</p> `
    } else if(idade < 18) {
         resultado.innerHTML += `<p>Menor de Idade</p> `
    } 
}