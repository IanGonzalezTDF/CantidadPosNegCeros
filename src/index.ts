let cantidad: number = Number(prompt("Ingrese la cantidad de numeros"));
let v: number[] = new Array(cantidad);
let indice: number;

for (indice = 0; indice < cantidad; indice++) {
  v[indice] = Number(prompt(`Ingrese el numero de la posicion ${indice}`));
}
let numPos: number = 0;
let numNeg: number = 0;
let numCero: number = 0;
for (indice = 0; indice < cantidad; indice++) {
  if (v[indice] > 0) {
    numPos++;
  } else if (v[indice] < 0) {
    numNeg++;
  } else {
    numCero++;
  }
}
console.log("Cantidad de Positivos: ", numPos);
console.log("Cantidad de Negativos: ", numNeg);
console.log("Cantidad de Ceros: ", numCero);
