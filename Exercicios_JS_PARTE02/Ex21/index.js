const data = new Date();

function horario(dtn){
    dtn = data.getHours();
    if (dtn < 12) {
        console.log("Bom dia");
        
    } else if (dtn < 18) {
        console.log("Boa tarde");
        
    } else {
        console.log("Boa noite");
        
    }
}
horario()