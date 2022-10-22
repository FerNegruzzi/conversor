function convertir(cantidad, moneda){
    let dolar = 290;
    let pesoArgentino = 1;
    let euro = 295;
    if(moneda === 'dolar'){
      return cantidad * dolar}
     else if(moneda === 'pesoArgentino'){
       return cantidad * pesoArgentino}
     else if(moneda === 'euro'){
       return cantidad * euro}
     else{
       alert("no se introdujo info")}
  }
  console.log("usted tiene" + " " + convertir(100, 'dolar') + " " + "pesos argentinos")