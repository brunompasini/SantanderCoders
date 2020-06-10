function escada(n)
{
    let matr=[];
    for (let i=0; i<n; i++){
        matr.push(" ".repeat(n-i-1)+"#".repeat(i+1));
    }
    return matr;
}
