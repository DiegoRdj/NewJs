let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const guardar = varA;
varA = varB;
varB = varC;
varC = guardar

console.log(varA, varB, varC);

//Jeito dele

let VarA = 'A'; // B
let VarB = 'B'; // C
let VarC = 'C'; // A

[VarA, VarB, VarC] = [VarB, VarC, VarA]

console.log(VarA, VarB, VarC);
