try {
    // Executado qnd nao há erros
    console.log("");
    console.log('Abri um arquivo');
    console.log("manipulei o arquivo e gerou erro");
    console.log('fechei arquivo');
    

    try {
        console.log(b);
        
    } catch (e) {
        console.log("Deu erro ai mano");
        
    } finally {
        console.log("tambem sou finally");
        
    }

} catch (error) {
    // Executado qnd há erros
    console.log("Tratando o erro");

} finally {
    // Sempre é executado
    console.log('FINALLY: Eu semper sou executado');
}