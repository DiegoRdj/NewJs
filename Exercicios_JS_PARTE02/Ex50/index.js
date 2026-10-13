function idade(idd) {
    try {
        if (idd < 0) {
            throw new Error("IDADE INVALIDA");
            
        }
        console.log(`Sua idadde é ${idd}`);
        
    } catch (error) {
        console.log(error.message);
    }
}
idade(-230)