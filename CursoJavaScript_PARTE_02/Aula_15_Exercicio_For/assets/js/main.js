
const section = document.querySelector(".container")

function criarDiv() {
 const div = document.createElement('div')   
 return div;
}

function dentroDaDiv() {
    const div = criarDiv();
    div.classList.add("div")
    section.appendChild(div) 
}

dentroDaDiv()
   
function elementos() {

    const dentroDiv = document.querySelector('.div')
    
    const elementos = [
        {tag: 'p', texto: 'Frase 1'}, //0
        {tag: 'div', texto: 'Frase 2'}, //1
        {tag: 'footer', texto: 'Frase 3'}, //2
        {tag: 'section', texto: 'Frase 4'}, //3
    ]
    for (let i = 0; i < elementos.length; i++) {
              dentroDiv.innerHTML += `<${elementos[i].tag}> ${elementos[i].texto} </${elementos[i].tag}>`      
    }
}
elementos()
