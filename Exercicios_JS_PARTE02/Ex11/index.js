function nota(nota) {
    if (nota > 8) {
        console.log("A");
    } else if (nota > 6) {
        console.log("B");
    } else if (nota > 4) {
        console.log("C");
    } else if (nota > 2) {
        console.log("D");
    }
    else if (nota < 2) {
        console.log("F");
        
    }
}
nota(8)