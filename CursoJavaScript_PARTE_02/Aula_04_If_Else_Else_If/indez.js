// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Posso ter varios elses ifs
//so pode um else na checagem

const hora = 12;

if (hora >= 0 &&hora <= 11) {
    console.log("Bom Dia!");
} else if (hora >= 12 && hora  <= 17) {
    console.log("Boa Tarde!");
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa Noite");
} else {
    console.log("Olá");
    
}