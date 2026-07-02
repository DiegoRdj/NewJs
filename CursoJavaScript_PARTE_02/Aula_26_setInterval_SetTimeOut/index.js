function mostrarHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12:false
    })
}

//Intervalo de Tempo


const timer = setInterval(function() { // Como construir o set interval
    console.log(mostrarHora());
    
}, 1000);

setTimeout(function() {
    clearInterval(timer) // fez o interval parar, limpou
}, 3200);


setTimeout(function() {
    console.log("Ola") // enviou uma msg dps de 5 seg
}, 5000);