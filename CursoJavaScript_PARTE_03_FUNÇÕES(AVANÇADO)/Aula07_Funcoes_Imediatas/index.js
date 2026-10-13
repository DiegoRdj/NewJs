// IIFE -> Imediately invoked function express

// invocar funcao automaticamente ao seu criada

(function (idade, peso, altura) {
    const sobrenome = "Persona"
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome("Jokers"));
        
    }
     falaNome()
     console.log(idade, peso, altura);
     
// passando idade, peso, altura

})(30, 80, 1.80); //isso executa o codigo automaticamnete

//Obrigatoriamente precisa de parenteses

(function () {
    
})();
