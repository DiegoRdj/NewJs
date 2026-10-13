const data = new Date()

function mes(mesDs) {
    
switch (mesDs) {
    case 0:
        mesDs = "Janeiro"
        return mesDs
        break;
    case 1:
        mesDs = "Fevereiro"
        return mesDs
        break;
    case 2:
        mesDs = "Março"
        return mesDs
        break;
    case 3:
        mesDs = "Abril"
        return mesDs
        break;
    case 4:
        mesDs = "Maio"
        return mesDs
        break;
    case 5:
        mesDs = "Junho"
        return mesDs
        break;
    case 6:
        mesDs = "Julho"
        return mesDs
        break;
    case 7:
        mesDs = "Agosto"
        return mesDs
        break;
    case 8:
        mesDs = "Setembro"
        return mesDs
        break;
    case 9:
        mesDs = "Outubro"
        return mesDs
        break;
    case 10:
        mesDs = "Novembro"
        return mesDs
        break;
    case 11:
        mesDs = "Dezembro"
        return mesDs
        break;

    default:
        console.log("ERRO");
        break;
}
}
let mesDs = data.getMonth()
console.log(mes(mesDs));
