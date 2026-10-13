function vogais(frase) {
    let i = 0
        for (const key in frase) {
            
            if (frase[key] == "a" || frase[key] == "e" || frase[key] == "i" || frase[key] == "o" || frase[key] == "u") {
             i++   
            }
        }
        console.log(`Tem ${i} vogais`);
}
vogais("dascasez")