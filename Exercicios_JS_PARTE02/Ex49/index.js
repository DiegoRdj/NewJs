function divisao(n1, n2){
    try {
        if (n2 == 0) {
        throw new Error("A divisao nao pode ser por 0");  
        }
        console.log(n1 / n2); 
        
    } catch (error) {
        console.log(error.message);
        
    }    
    }
divisao(20, 10)
