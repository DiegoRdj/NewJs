function tresNumeros(x, y, z) {
    if (x > y && x > z) {
    console.log(`${x} é o maior`);
        
    } else if (y > x && y > z) {
    console.log(`${y} é o maior`);
        
    } else if (z > y && z > x) {
    console.log(`${z} é o maior`);
        
    } else {
        console.log("Tudo Igual");
        
    }
}

tresNumeros(32,4,1)