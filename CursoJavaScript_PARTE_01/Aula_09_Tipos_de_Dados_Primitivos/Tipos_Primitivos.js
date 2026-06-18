// String, NUmber, Undifined, null e Boolean (Symbol vera dps)

const nome = 'Luiz'; //String
const nome1 = "Luiz"; // String 
const nome2 = `Luiz`; // String

const num1 = 10; // Number
const num2 = 10.52; // Number

let nomeAluno; // Undefined = Não aponta para local nenhum da memoria!!
const sobrenomeAluno = null; //Null = Nulo -> Não aponta para local nenhum da memoria

//O null utiliza qnd nos queremos desconfigurar uma variavel
//Exemplo: escolher a cor de fundo do usuario, se nao tem valor = null

//Valor booleano = verdadeiro ou falso (Logico)
const boolean = true;
const boolean2 = false;

const aprovado = true; // ou false

console.log(typeof(nome) + " "+ nome)
console.log(typeof(num1) + " "+ num1)
console.log(typeof(nomeAluno) + " "+ nomeAluno)
console.log(typeof(sobrenomeAluno) + " "+ sobrenomeAluno)
console.log(typeof(boolean) + " "+ boolean)

let a = 2;
let b = a; // sempre que fizer isso, ambos teram o msm valor

console.log(a, b)

a = 3; // B continua sendo 2, pois ele nao pegou o novo valor