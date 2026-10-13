let nome = "Joker";

let externa = () => {
    let nome = "Makoto"

    let interna = () =>{
        console.log(nome);
        
    }
    interna()
}

externa()
