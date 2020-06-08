function produto(lista){
  var comprimento = lista.length;
  var resultado = 1;
  for (var i=0; i < comprimento; i++){
    resultado = resultado * lista[i];
  }
  return resultado;
}
