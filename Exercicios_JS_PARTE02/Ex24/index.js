    let x = 10
    let y = 2

    function calc(opeador) {

    switch (opeador) {
        case "+":
            return x + y;
            break;
    
        case "-":
            return x - y;
            break;
    
        case "*":
            return x * y;
            break;
    
        case "/":
            return x / y;
            break;
    
        default:
            break;
    }
}

console.log(calc("*"));
