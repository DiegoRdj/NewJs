//Meu Jeito

let arr = []

function btn() {
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    
    document.body.innerHTML += (`<p>${nome} ${sobrenome} ${peso} ${altura}</p>`)

const obj = { 
    nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura

}
  arr.push(obj)
    console.log(arr);       
}

   
    
    