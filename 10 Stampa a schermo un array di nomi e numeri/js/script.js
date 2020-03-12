//Crea un array contenente 5 nomi e stampali a schermo

var list =["Vale, ", "Silvia, ","Sabrina, ","Luisa, ","Marco."];
console.log(list);

for (var i = 0; i < list.length; i++){
console.log (list[i]);
document.writeln(list[i]);
}


//Crea un array di numeri, e stampa solo i numeri dispari
var number = [1,2,3,4,5,6,7,8,9,10];

for (var i = 0; i < number.length; i++){
 if(number[i] % 2 !== 0){
  console.log(number[i]);
   document.writeln (number[i]);
 }
}
 //finito