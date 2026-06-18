
//Jeito Dele
function meuEscopo(){
    const form = document.querySelector(".form")
    const resultado = document.querySelector(".resultado")

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault(); //Nesse evento, vc previni oq era para acontecer por padrao

        const nome = form.querySelector('.nome').value
        const sobrenome = form.querySelector('.sobrenome').value
        const peso = form.querySelector('.peso').value
        const altura = form.querySelector('.altura').value
    
        const obj = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value //Pegar valor
        }

        pessoas.push(obj)
        console.log(pessoas);
        
           resultado.innerHTML += (`<p>${nome} ${sobrenome} ${peso} ${altura} </p>`)
}
form.addEventListener('submit', recebeEventoForm) //Escutar o evento e fazer 
    //Onsubmit é um evento de enviar do form!
    
    }
 

meuEscopo()

