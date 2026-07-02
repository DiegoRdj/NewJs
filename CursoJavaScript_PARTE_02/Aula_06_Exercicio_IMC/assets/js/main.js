let form = document.querySelector("#form");
let resultado = document.querySelector("#resultado")
form.addEventListener('submit', function(evento){
    evento.preventDefault();
    let peso = document.querySelector("#peso").value
    let altura = document.querySelector("#altura").value
    let resultado1 = document.querySelector("#resultado");
    peso = Number(peso);
    altura = Number(altura);

    let imc = peso / (altura * altura)
    
    let pesoNaN = Number.isNaN(peso);
    let alturaNaN = Number.isNaN(altura);

    
    if (pesoNaN === true && alturaNaN === true) {
        resultado1.innerHTML = `Peso e Altura Invalidos`
        resultado.style.background = "red";
        resultado.style.padding = "5px";
        resultado.style.color = "white";
        resultado.style.textAlign = "center";
        resultado.style.borderRadius = "10px";
    }  else if (pesoNaN === true) {
        resultado1.innerHTML = `Peso Invalido`
         resultado.style.background = "red";
        resultado.style.padding = "5px";
        resultado.style.color = "white";
        resultado.style.textAlign = "center";
        resultado.style.borderRadius = "10px";
    }  else if (alturaNaN === true) {
        resultado1.innerHTML = `Altura Invalida`
         resultado.style.background = "red";
        resultado.style.padding = "5px";
        resultado.style.color = "white";
        resultado.style.textAlign = "center";
        resultado.style.borderRadius = "10px";
    } else if(imc <= 0 || imc > 90){
        resultado1.innerHTML = `IMC INVALIDO`
         resultado.style.background = "red";
        resultado.style.padding = "5px";
        resultado.style.color = "white";
        resultado.style.textAlign = "center";
        resultado.style.borderRadius = "10px";
    } else if (imc < 18.5) {
        resultado1.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Abaixo do Peso)`
         resultado.style.background = "palegreen";
        resultado.style.padding = "5px";
        resultado.style.color = "black";
        resultado.style.textAlign = "center";
        resultado.style.borderRadius = "10px";
        
    }else if(imc < 24.9){
        resultado1.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Peso Normal)`
        resultado.style.background = "palegreen";
        resultado.style.padding = "5px";
        resultado.style.color = "black";
        resultado.style.textAlign = "center";
        resultado.style.borderRadius = "10px";
              
    }
     else if(imc < 29.9){
        resultado1.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`
        resultado.style.background = "palegreen";
        resultado.style.padding = "5px";
        resultado.style.color = "black";
        resultado.style.textAlign = "center";
        resultado.style.borderRadius = "10px";
              
    }else if(imc < 34.9){
        resultado1.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`
        resultado.style.background = "palegreen";
        resultado.style.padding = "5px";
        resultado.style.color = "black";
        resultado.style.textAlign = "center";
        resultado.style.borderRadius = "10px";
              
    } 
    else if(imc < 39.9){
        resultado1.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`
        resultado.style.background = "palegreen";
        resultado.style.padding = "5px";
        resultado.style.color = "black";
        resultado.style.textAlign = "center";
        resultado.style.borderRadius = "10px";
              
    } else if(imc >= 40){
        resultado1.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`
        resultado.style.background = "palegreen";
        resultado.style.padding = "5px";
        resultado.style.color = "black";
        resultado.style.textAlign = "center";
        resultado.style.borderRadius = "10px";  
              
    } 
})

