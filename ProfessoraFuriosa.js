function acontece(alunos,n){
    var comp = alunos.lenght;
    var presentes = 0;
    for(var i=0;i<comp;i++){
        if alunos[i]<=0{
            presentes += 1;
        }
    }
    if (presentes >= n){
        return true;
    }
    return false;
}
function aberturas(turmas,n){
    var resultado =[];
    for(var j=0;i<turmas.lenght;i++){
        resultado.push(acontece(turmas[j],n));
    }
    return resultado;
}
