function alturaArvoreUtopica(n)
{
    var tam = 1;
    for(let i=0;i<n+1;i++){
        if (i%2 == 0 && i != 0){
            tam+=1;
        } else if (i%2 != 0) {
            tam=tam*2;
        }
    }
    return tam;
}
