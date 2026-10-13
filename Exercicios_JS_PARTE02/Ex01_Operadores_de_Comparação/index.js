function maiorIgualMenor (x, y) {
    if (x > y) {
        console.log(`${x} é maior que ${y}`);
        
    }
    else if (x < y) {
        console.log(`${y} é maior que ${x}`);
        
    }
    else if (x === y) {
        console.log(`${x} e ${y} são iguais`);
        
    }
}

maiorIgualMenor(5, 15)