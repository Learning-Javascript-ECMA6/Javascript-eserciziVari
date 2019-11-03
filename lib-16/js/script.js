/*Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.*/

var primoArray = [1,2,3,4,5,6,7,8,9,10];
console.log("l'array lungo è : " ,primoArray);

var secondoArray = [1,2,3,4,5];
console.log("array senza push : " , secondoArray);



function riempimento (array1, array2){
 while (array1.length<array2.length) {
   var valoreInserito = parseInt(prompt("inserisci numero" + "inserirai : " + (array2.length-array1.length) + "valori" ));
   
  array1.push(valoreInserito);
 }
 var arr = [array1, array2];
 return arr;
}
console.log(riempimento(primoArray , secondoArray));
