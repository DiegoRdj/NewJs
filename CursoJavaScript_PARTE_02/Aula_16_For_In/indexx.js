//                 0       1      2
const frutas = ['pera', 'maca', 'uva'];
//nome q quiser | arr
for (let i in frutas) {
    console.log(frutas[i]);
    
}
// for in le as chaves do obejto ou indicies do array 
//so isso ai, bom para array

console.log("======================");


const pessoa = {
    nome: "Kuai",
    sobrenome: "Liang",
    idade: 30
};

    for (let keys in pessoa){
        console.log(keys, pessoa[keys]);
        console.log("+-----+");
        
    }
    console.log(pessoa.nome);
    //outra maneira de acessar
    console.log(pessoa['nome']);

    const chave = 'sobrenome'
    console.log(pessoa[chave]);
    
    
    