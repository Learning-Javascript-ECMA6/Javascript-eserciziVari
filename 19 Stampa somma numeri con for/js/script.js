//Il software deve chiedere per 5 volte all’utente di inserire un numero. 
//Il programma stampa la somma di tutti i numeri inseriti. 
//Esegui questo programma in due versioni, con il for e con il while.

var somma = 0;
for (var i = 0; i < 5; i++) {
    var num = parseInt(prompt('Inserisci un numero'));
    console.log('Numero inserito: ', num);

    somma = somma + num;
}
console.log('Somma numeri inseriti : ', somma);


var somma = 0;
var i = 0;
while (i < 5) {
    var num = parseInt(prompt('Inserisci un numero'));
    console.log('Numero inserito: ', num);

    somma = somma + num;
    i++;
}
console.log('Somma numeri inseriti : ', somma);

//finito