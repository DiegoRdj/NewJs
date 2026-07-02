
try { //tente executar, caso ocorra um erro, catch pega o erro
    console.log(naoExisto);

} catch (error) { //error / pode colocar quaalquer coisa alli, err, e e etc
    console.log("da nao mano");

    // Não mostre o erro completo para o usuario final
}

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error("x e y precisam ser numeros");
        //   pode trocar para reference error
    }
    return x + y
}
try {
    console.log(soma(5, 10));
console.log(soma("sadsadd", "erwere"));
} catch (error) {
    //console.log(error);
    console.log("Alguma coisa mais amigavel para o usuario");
        
}
