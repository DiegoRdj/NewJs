const pessoa = {
    nome: "PERSONA",
    sobrenome: "STRIKERS",
    idade: 5,
    endereco: {
        rua: 'Av Brasil',
        numero: 20
    }
};

// Atribuição via desestruturação
// Pode tambem  nome: n = ''
// Pode mudar por aqui : nome = " nome ai "
const {nome, sobrenome, ...resto} = pessoa //Extrai desse objeto, essa chave
// atribuiu rua para variavel R 
const {endereco: {rua : r, numero}, endereco} = pessoa 
console.log(nome, sobrenome, r, numero, resto);
 
