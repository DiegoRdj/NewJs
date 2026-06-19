function nomeAluno(nome){
    return `Nome do Aluno: ${nome}`
}
function mediaAluno(nota){
    return `Media do aluno: ${nota}`
}
function situacaoDoAluno(nota){
    if (nota < 7) {
        return "Reporvado"
    } else {
        return "Aprovado"
    }
}
console.log(nomeAluno("Yu"));
console.log(mediaAluno(9));
console.log(situacaoDoAluno(9));
