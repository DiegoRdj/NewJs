const array = [1,2,3]
array.push(4)
array[0] = "Luiz"
console.log(array);

// faça array com let
// faça objeto com const

const pessoa1 = {
    nome: "Makoto",
    sobrenome: "Yuki",
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome}, ${this.idade}`);
        
    },
    incrementaIdade(){
    this.idade++
    }
};
pessoa1.incrementaIdade()
pessoa1.fala()

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.sobrenome);

function criaPessoa (nome, sobrenome, idade) {//Sempre interessante fazer objetos novos em functions
    return{
        nome,
        sobrenome,
         idade
    }
}

const p1 = criaPessoa("Ren", "Amamiya", 20)
const p2 = criaPessoa("Yu", "iya", 20)
const p3 = criaPessoa("Todo", "Csa", 20)
const p4 = criaPessoa("Kotone", "Amya", 20)
const p5 = criaPessoa("Ken", "Amami", 20)
const p6 = criaPessoa("Eren", "Aiya", 20)
console.log(p1.nome,p1.sobrenome, p1.idade);
console.log(p2.nome,p2.sobrenome, p2.idade);
console.log(p3.nome,p3.sobrenome, p3.idade);
console.log(p4.nome,p4.sobrenome, p4.idade);
console.log(p5.nome,p5.sobrenome, p5.idade);
console.log(p6.nome,p6.sobrenome, p6.idade);
