const nome = "Naoya todo"
console.log(nome[0]);
//                   0                1             2          3               
const alunos = ["Ren amamiya", "yu narukami", "Makoto yuki", nome] //Pode todo tipo de dado, nn recomendado
//Array sao indexdados por elemento: 0 = ren, 1 = yu, 2 = makoto, 3 = nome
console.log(alunos); // Array Completo
console.log(alunos[0]); // Pegou o primeiro nome apenas
console.log(alunos[1]); // Pegou o segundo nome apenas

alunos[0] = 'Kotone' // editou o indice
console.log(alunos);

alunos[4] = "Akihiko" // Criou um indiice novo
console.log(alunos);
alunos[alunos.length] = "Yukari"
alunos[alunos.length] = "Ken"
alunos[alunos.length] = "Mitsuru" // aumenta sempre no final
console.log(alunos);

alunos.push("Junpei") // Coloca ai no final, msm q length, so q melhor
console.log(alunos);

alunos.unshift("Koromaru") // Coloca no começo
alunos.unshift("Chie") // FICA em primeiro

console.log(alunos);

alunos.pop() // Remove o ultimo elemento!

const removido = alunos.pop() // Salva quem foi removido
console.log(removido); 
console.log(alunos);

const removido2 = alunos.shift() // Tira o primeiro
console.log(removido2);
console.log(alunos);

delete alunos[1] // deleta o elemento, porem fica um elemnto vazio

console.log(alunos.slice(0, 3)); // coloca onde começa e onde termina

console.log(typeof alunos) // Object
console.log(alunos instanceof Array); // pergunta se alunos é um array









