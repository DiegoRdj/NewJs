// Factory function (Função fabrica)
// Contrutor Function (Funcao construtora)

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, sobrenome,

        // getter
       get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //setter
        set nomeCompleto(valor){
            valor = valor.split(" ") // a cada espaço, o nome vai ser divido
            this.nome = valor.shift()
             //vai retornar o primeiro valor para a variavel e ele vai remover o valor do array
             this.sobrenome = valor.join(" ");
             console.log(valor);
             
        },


        fala(assunto) {
            return `${this.nome} tem ${this.idade} anos e esta ${assunto}.`
             //this acessa a chave dentro do objeto
        },
        idade: 16,
        altura: a,
        peso: p,

        //getter
        get imc(){ // isso faz ele virar um atributo do objeto, ent nn precisa usar () no imc
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa("Jokers", "Persona", 1.80, 80);
const p2 = criaPessoa("Makotos", "Persona", 1.60, 54);
console.log(p1.fala("Falando de js"));
console.log(p2.fala("Falando de js"));
console.log(p2.imc);
p1.nomeCompleto = "Makotos persona 3"
console.log(p1.nome);
console.log(p1.sobrenome);