const nome = "Makoto"
const sobrenome = "Yuki"
const idade = 16;
const peso = 60;
const alturaEmM = 1.70
let imc;
imc = peso / (alturaEmM * alturaEmM);
let anoNascimento;
anoNascimento = 1992

console.log(nome +" "+ sobrenome + " tem " + idade + " anos, pesa " + peso + " kg")
console.log(`Tem  ${alturaEmM}  de altura e seu imc é de ${imc}`) //Template Sttring
console.log(nome+" "+sobrenome + " nasceu em " + anoNascimento+".")