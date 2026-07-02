// const tresHoras = 60*60*3*1000
// const umDia = 60 * 60 * 24 * 1000

const data = new Date(); //sempre o Date maiusuculo
const data2 = new Date(2019,3,20, 15, 40, 28, 500); //sempre o Date maiusuculo
const data3 = new Date('2019-3-20  15:40:28.100'); //da no mesmo
console.log(data.toString()); // mostra a data
console.log(data2.toString()); // mostra a data
console.log(data3.toString()); // mostra a data
console.log(data);
console.log(data2);

console.log('Dia: ' + data.getDate());
console.log('Mes: ' + data.getMonth() + 1); // Mes começa do zero
console.log('Ano: ' + data.getFullYear());
console.log('Hora: ' + data.getHours());
console.log('Min: ' + data.getMinutes());
console.log('Seg: ' + data.getSeconds());
console.log('ms: ' + data.getMilliseconds());
console.log('Dia da Semana: ' + data.getDay());
console.log(Date.now()); // Pega os milesiomos ate o dia de hoje


