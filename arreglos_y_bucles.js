// Objeto array declarado con sus datos (personajes JEVR):
//          Posición
//          0                  1        2        3              4            5        6             7
var jevr = ["Desatornillador", "Marro", "Rombo", "Guitarresco", "Globincio", "Water", "Paraguanta", "Ventiladator"]
// Longitud del array almacenada en una variable:
console.log("Tamaño de mi arreglo:", jevr.length);
// Acceso a la posición 3 del array:
var texto = jevr[3]
console.log("Posición 3: " + texto);
// Recorriendo todos los elementos del array con el uso de bucle for:
for(var v = 0; v < jevr.length; v++) {
  console.log(v, jevr[v]);
}
// Cambio del valor de la posición 2 del array:
jevr[2] = "Péncilo";
console.log("Nuevo valor en posición 2:", jevr[2]);
// Elemento agregado al final del array, ahora serán 9 elementos en vez de 8:
jevr.push("Aplanor");
console.log(jevr);