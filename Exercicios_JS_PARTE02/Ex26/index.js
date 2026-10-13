const pessoa = {
    nome: "joker",
    idade: 16,
    cidade: "Shibuya"
};

const {...resto} = pessoa
console.log(resto);
const {nome: name, idade: age, cidade: ondeMora} = pessoa
console.log(name, age, ondeMora);

