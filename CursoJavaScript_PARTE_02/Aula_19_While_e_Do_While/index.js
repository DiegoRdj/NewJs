const nome = "PERSONA"
let i = 0;
let j = 0;

while (i <= 10) {
    console.log(i);
    i++
}
console.log("");

while (j < nome.length) {
    console.log(nome[j]);
    j++
}

//EXEMPLO REAL: 

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)    
}
const min = 1;
const max = 50
let rand = random(min, max);


while (rand !== 10) {
    rand = random(min, max)
    console.log(rand);
}

//DO WHILE

do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);
