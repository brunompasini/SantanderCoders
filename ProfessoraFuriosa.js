function acontece(alunos,n){
    let presentes = 0;
    for(let i=0;i<alunos.length;i++){
        if (alunos[i]<=0){
            presentes += 1;
        }
    }
    return (presentes > n-1);
}
function aberturas(turmas,n){
    let resultado =[];
    for(let j=0;j<turmas.length;j++){
        resultado.push(acontece(turmas[j],n));
    }
    return resultado;
}
