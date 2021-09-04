const txt1 = "Tienda de deportes JEVR";
let txt = " de descuento";
let txt2 = "Pelota de tenis: $55";
let txt3 = "Costal de box: $500";
let txt4 = "Casaca de beisbol: $600";
const txt5 = "Total de compra: $";
const txt6 = "Total a pagar: $"
const txt7 = "Usted ahorra: $";
const txt8 = "¡Gracias por su compra!"
var totalDeCompra = 55 + 500 + 600;
var ustedAhorra = totalDeCompra * .40;
var totalAPagar = totalDeCompra - ustedAhorra;
let edeadDelCliente = 20;
let descuento
if(totalDeCompra >= 1000 && edeadDelCliente < 21) {
  descuento = "-40%" + txt;
}else if(totalDeCompra >= 1000 && edeadDelCliente > 21) {
  descuento = "-30%" + txt;
}else if(totalDeCompra < 999 || edeadDelCliente > 21){
  descuento = "-10%" + txt;
}
console.log(txt1);
console.log(txt2);
console.log(txt3);
console.log(txt4);
console.log(txt5 + totalDeCompra);
console.log(descuento);
console.log(txt6 + totalAPagar);
console.log(txt7 + ustedAhorra);
console.log(txt8);