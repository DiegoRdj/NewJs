let cronometrar = document.querySelector("#cronometro")
let iniciar = document.querySelector("#iniciar")
let pausar = document.querySelector("#pausar")
let reiniciar = document.querySelector("#reiniciar")

let dataInicial;
let clock;
let format;
let agora = 0

iniciar.addEventListener("click", function (e) {
   e.preventDefault
    clearInterval(clock)
    dataInicial = Date.now() - agora

   clock = setInterval(() => {
    
    agora = Date.now() - dataInicial;
    let horas = new Date(agora)
    format = horas.toLocaleTimeString('pt-BR', {
        timeZone: 'UTC',
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit", 
    
    });
    cronometrar.innerHTML = format
   }, 1000);
});

pausar.addEventListener("click", function(e){
    e.preventDefault

    setTimeout(() => {
        clearInterval(clock)
    }, 1);
});

reiniciar.addEventListener("click", function(e){
    e.preventDefault

    setTimeout(() => {
        clearInterval(clock)
        agora = 0
        cronometrar.innerHTML = "00:00:00"
    }, 1);
})