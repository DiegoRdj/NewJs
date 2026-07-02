const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto1;

switch (diaSemana) { //O que vai ser comparado, oq vai ser checado
    case 0:
        diaSemanaTexto1 = "Domingo";
        break;
    case 1:
        diaSemanaTexto1 = "Segunda";
        break
         case 2:
        diaSemanaTexto1 = "Terça";
        break
         case 3:
        diaSemanaTexto1 = "Quarta";
        break
         case 4:
        diaSemanaTexto1 = "Quinta";
        break
         case 5:
        diaSemanaTexto1 = "Sexta";
        break
         case 6:
        diaSemanaTexto1 = "Sabado";
        break
    default:
        break;
}


// if (diaSemana === 0) {
//     diaSemanaTexto = "Domingo"
// } else if (diaSemana === 1) {
//     diaSemanaTexto= "Segunda"
// } else if (diaSemana === 2) {
//     diaSemanaTexto = "Terça"
// } else if (diaSemana === 3) {
//     diaSemanaTexto = "Quarta"
// } else if (diaSemana === 4) {
//     diaSemanaTexto = "Quinta"
// } else if (diaSemana === 5) {
//     diaSemanaTexto = "Sexta"
// } else if (diaSemana === 6) {
//     diaSemanaTexto = "Sabado"
// }

console.log(diaSemana, diaSemanaTexto1);
