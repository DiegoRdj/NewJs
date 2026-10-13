function palindromo(frase) {
       if (frase == frase.split("").reverse().join("")) {
            console.log(`${frase} é palindromo`);
            
       } else {
        console.log(`${frase}  não é palindromo`);
}
}
palindromo("ana")