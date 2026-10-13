// New Date()
function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12:false,
            timeZone:'UTC' //Arrumando a time zone para nosso local, ficando 00:00:00
        })
    }
    
    const relogio = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    
    let segundos = 0;
    let timer;
    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++
            relogio.innerHTML = criaHoraDosSegundos(segundos) // formatou o horario
        }, 1000);
    }
    
    document.addEventListener('click', function(e){
        const el = e.target;
    
        if (el.classList.contains('zerar')) {
             relogio.classList.remove('pausado')
        clearInterval(timer)
        segundos = 0;
        relogio.innerHTML = "00:00:00"
        }
        if (el.classList.contains('iniciar')) {
         relogio.classList.remove('pausado') //removeu a classe
        clearInterval(timer)
        iniciaRelogio() 
        }
        if (el.classList.contains('pausar')) {
        relogio.classList.add('pausado') // adicionou
        clearInterval(timer)
        }
    })
}    

relogio()

    // const relogio = document.querySelector('.relogio')
    // const iniciar = document.querySelector('.iniciar')
    // const pausar = document.querySelector('.pausar')
    // const zerar = document.querySelector('.zerar')
    
    
    // iniciar.addEventListener('click', function (event) {
     
    // });
         
    // pausar.addEventListener('click', function (event) {
    
    // });
    
    // zerar.addEventListener('click', function (event) {
    
    // });