const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p') //Pegou todos os P do paragrafo

const estilosBody = getComputedStyle(document.body) // Tem tudo de CSS q foi computado pelo navegador no body
const backgroundColorBody = estilosBody.backgroundColor; // pegou especificamente o background
console.log(backgroundColorBody);


for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = "white";
    p.style.padding = "8px"
    p.style.borderRadius = "25px"
    p.style.textAlign = "center"     
}