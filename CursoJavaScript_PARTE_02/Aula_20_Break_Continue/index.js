const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (const num of numeros) {
    if (num === 2) {
        console.log("PULEI O 2");
        continue // Continue so pula para a proxima interação, mas continua executando o codigo!
    }

    if (num === 7) {
        console.log("Laço de Repetição encerrado");
        
        break // Mesma função do SWIITCH, encerra o laço 
    }
    console.log(num);
}

for (let numero in numeros){
    if (numeros[numero] === 2) {
        console.log("PULEI O 2");
        continue // Continue so pula para a proxima interação, mas continua executando o codigo!
    }

    if (numeros[numero] === 7) {
        console.log("Laço de Repetição encerrado");
        
        break // Mesma função do SWIITCH, encerra o laço 
    }
    console.log(numeros[numero]);
}