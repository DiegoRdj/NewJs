const h1 = document.querySelector('.container h1')
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

//h1.innerHTML = data.toLocaleString('pt-BR', opcoes) //sexta-feira, 26 de junho de 2026 às 15:50
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle:'short'})