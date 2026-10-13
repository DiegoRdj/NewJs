function eBissexto(ano){
    if (ano % 400 === 0) {
        console.log("É Bissexto");
    } else if (ano % 100 === 0) {
          console.log("Não é Bissexto");
    }
     else if (ano % 4 === 0) {
          console.log("É Bissexto");
     } else {
          console.log("Não é Bissexto");
     }
}

eBissexto(2026)