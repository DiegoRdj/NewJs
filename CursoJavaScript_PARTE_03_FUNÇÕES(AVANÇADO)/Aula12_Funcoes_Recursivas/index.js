//Recursividade
function recursividade(max) {
    if (max >= 12) return // para função
    max++;
    console.log(max);
    recursividade(max);  
}

recursividade(0);

//Recursividade é quando uma função se chama de volta