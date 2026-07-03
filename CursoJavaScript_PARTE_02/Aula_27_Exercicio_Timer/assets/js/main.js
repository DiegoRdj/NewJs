const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let data = new Date();
let dataInicial;
let clock
let format
let agora = 0

iniciar.addEventListener('click', function (event) {
    event.preventDefault()
    clearInterval(clock);
    relogio.style.color = 'black'
    dataInicial = Date.now() - agora

    clock = setInterval(() => {
        agora = Date.now() - dataInicial;
        let cronometro = new Date(agora)
        format = cronometro.toLocaleTimeString('pt-BR', {
            timeZone: 'UTC',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        relogio.innerHTML = format
    }, 1000);
});
     
pausar.addEventListener('click', function (event) {
    relogio.style.color = 'red'
    setTimeout(() => {
        event.preventDefault
        clearInterval(clock)
       
    }, 1);
});

zerar.addEventListener('click', function (event) {
    setTimeout(() => {
        clearInterval(clock)
        agora = 0
        relogio.innerHTML = "00:00:00"
        relogio.style.color = 'black'
    }, 0);
});

