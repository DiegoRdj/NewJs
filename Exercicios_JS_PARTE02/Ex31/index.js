function fatorial(numero) {
    let fatReal = 1
    for (let i = numero; i >= 1; i--) {
    fatReal *= i
    }
    console.log(fatReal);
    
}
fatorial(5)