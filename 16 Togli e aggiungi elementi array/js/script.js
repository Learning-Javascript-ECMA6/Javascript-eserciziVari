/*Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.*/

var arrayMax = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayMin = [1, 2, 3, 4, 5];

function riempi(array1, array2) {
  while (array1.length < array2.length) {
    var valoreInserito = parseInt(prompt('Inserisci un valore.' + ' Inserirai : ' + (array2.length - array1.length + ' valori.')));
    array1.push(valoreInserito);
  }
  return array1;
}
var res = riempi(arrayMin, arrayMax);

console.log('Arrey pieno : ', arrayMax);
console.log('Arrey da riempire : ', res);