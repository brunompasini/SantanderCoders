function maisMenos(a)
{
    let num = a.length;
    let pos = 0;
    let zer  = 0;
    let neg = 0;
    for (let i=0;i<num;i++){
        if(a[i]>0){
            pos++;
        }
        else if(a[i]==0){
            zer++;
        }
        else{
            neg++;
        }
    }
    pos = pos/num;
    zer = zer/num;
    neg = neg/num;
    matr = [pos, zer, neg];
    return matr;
}
