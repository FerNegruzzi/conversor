alert("este es un conversor de Dolares o Euros a Pesos Argentinos")
function convertir(cantidad, moneda) {
  let dolar = 290;
  let pesoArgentino = 1;
  let euro = 295;
  if (moneda === 'dolar') {
    return cantidad * dolar
  }
  else if (moneda === 'pesoArgentino') {
    return cantidad * pesoArgentino
  }
  else if (moneda === 'euro') {
    return cantidad * euro
  }
  else {
    alert("no se introdujo info")
  }
}
alert("usted tiene" + " " + convertir(prompt("cuanto dinero quieres cambiar?"+"(cantidad en Dolares o Euros)"), prompt("de que moneda es el dinero que ingresaste?"+"(Dolar o Euro)")) + " " + "pesos argentinos")