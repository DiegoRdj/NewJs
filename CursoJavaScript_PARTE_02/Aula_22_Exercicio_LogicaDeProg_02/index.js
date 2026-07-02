//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (Number).
// Retorne true se a imagem estiver no modo paisagem

function ePaisagem(largura, altura) {
    if (largura === 1920 && altura === 1080 || largura === 1280 && altura === 720) {
        return (`É paisagem`)
    } else if (largura === 1080 && altura === 1350 || largura === 1080 || altura === 1440) {
        return (`É retrato`)
    } else {
        return (`Não é nenhum dos dois kkkkk`)
    }

}

 let func = ePaisagem(1080, 1350)
    console.log(func);
    