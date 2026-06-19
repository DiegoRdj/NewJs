/**
 * && -> so Um precisa ser FALSO para ser FALSO "O valor mesmo"
 * || -> Todos precisam ser FALOSOS para ser FALSE
 * 
 * Falsy
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NAN
 */

console.log("Makoto" && true && "Yu"); // se usar AND q avalia em falso em JS, ele retorna o valor falso
// Ou ele retorna o ultimo valor verdairo

function falaOi(){
    return "Oi";
}

let vaiExecitar = "Joaozinho";

console.log(vaiExecitar && falaOi()); //Executou função por conta do vaiExecutar é true

console.log(0 || false || null|| "Joker" || true); //Retorna o primeiro valor verdadeiro

