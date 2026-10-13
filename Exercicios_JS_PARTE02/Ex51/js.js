let horario = document.querySelector("#horario")


function Relogio() {

    setInterval(() => {
        let data = new Date();
        let horas = data.getHours().toString();
        let minutos = data.getMinutes().toString();
        let segundos = data.getSeconds().toString();
        if (horas < 10) {
            horas = `0${horas}`

        } if (minutos < 10) {
            minutos = `0${minutos}`
        }
         if (segundos < 10) {
            segundos = `0${segundos}`
        }
           horario.innerHTML = `${horas}:${minutos}:${segundos}`
     
    }, 1000);
}

Relogio()