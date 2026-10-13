const data = new Date()

function diaDaSemana( diaDaSemana) {

    switch (diaDaSemana) {
        case 0:
            diaDaSemana = "Domingo"
             return diaDaSemana
            break;
        case 1:
             diaDaSemana = "Segunda"
              return diaDaSemana
            break
        case 2:
              diaDaSemana = "Terça"
               return diaDaSemana
            break;
        case 3:
              diaDaSemana = "Quarta"
               return diaDaSemana
            break
        case 4:
              diaDaSemana = "Quinta"
               return diaDaSemana
            break;
        case 5:
            diaDaSemana = "Sexta"
            return diaDaSemana
            break
        default:
           diaDaSemana = "Sabado"
            return diaDaSemana
            break;
    }
}
let diaSemana = data.getDay();
console.log(diaDaSemana(diaSemana));
