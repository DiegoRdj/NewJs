const obj = {
    nome: "PERSONA",
    sobrenome: "Strikers",
    idade: 10,
    endereço: "shibuya",
};

let {nome, sobrenome} = obj;
[nome, sobrenome] = [sobrenome, nome]
console.log(nome, sobrenome);

