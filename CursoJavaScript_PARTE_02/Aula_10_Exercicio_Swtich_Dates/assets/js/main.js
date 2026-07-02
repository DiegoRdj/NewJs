let horario = document.querySelector("#horario")
const data = new Date();
const diaSemana = data.getDay()
const mes= data.getMonth()

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = "Domingo"
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = "Segunda"
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = "Terça"
            return diaSemanaTexto;
    
        case 3:
            diaSemanaTexto = "Quarta"
            return diaSemanaTexto;
    
        case 4:
            diaSemanaTexto = "Quinta"
            return diaSemanaTexto;
    
        case 5:
            diaSemanaTexto = "Sexta"
            return diaSemanaTexto;
    
        case 6:
            diaSemanaTexto = "Sabado"
            return diaSemanaTexto;
        default:
            break;
    }
}

function getMes(mes) {
  let mesEmTexto

  switch (mes) {
    case 0:
        mesEmTexto = "Janeiro"
        return mesEmTexto;
    case 1:
        mesEmTexto = "Fevereiro"
        return mesEmTexto;
    case 2:
        mesEmTexto = "Março"
        return mesEmTexto;
    case 3:
        mesEmTexto = "Abril"
        return mesEmTexto;
    case 4:
        mesEmTexto = "Maio"
        return mesEmTexto;
    case 5:
        mesEmTexto = "Junho"
        return mesEmTexto;
    case 6:
        mesEmTexto = "Julho"
        return mesEmTexto;
    case 7:
        mesEmTexto = "Agosto"
        return mesEmTexto;
        case 8:
        mesEmTexto = "Setembro"
        return mesEmTexto;
    case 9:
        mesEmTexto = "Outubro"
        return mesEmTexto;
    case 10:
        mesEmTexto = "Novembro"
        return mesEmTexto;
    case 11:
        mesEmTexto = "Dezembro"
        return mesEmTexto;
  
    default:
        break;
  }
    
}
function zeroAEsquerda(num){
   return num >= 10 ? num : `0${num}` 
}
function organizacaoDia() {

const diaTexto = (getDiaSemanaTexto(diaSemana));
 const mesEmTexto = (getMes(mes));
 const dia = zeroAEsquerda(data.getDate());
 const ano = zeroAEsquerda(data.getFullYear());
 const horas = zeroAEsquerda(data.getHours());
 const min = zeroAEsquerda(data.getMinutes());
horario.innerHTML = `${diaTexto}, ${dia} de ${mesEmTexto} de ${ano}, ${horas}:${min}`
}
organizacaoDia()