function produto(lista){
  let resultado = 1;
  for (let i=0; i < lista.length; i++){
    resultado = resultado * lista[i];
  }
  return resultado;
}
