/* setTimeout(myFunction, 3000);
function myFunction() {
    alert('Hello');
} */


/* var clock = setInterval(myFunction, 3000); 
function myFunction() {
    alert('Hello');
}
clearInterval(clock); */


/* Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
Dopo il tempo indicato, appare un alert() */

var utente = parseInt(prompt('quanti secondi mancano alla cottura della pasta?') * 1000);
console.log('tempo rimanente per l utente ', utente);

setTimeout(myFunction, utente);
function myFunction() {
    alert('la pasta è pronta');
}

//Simulare un countdown di 10 secondi che alla fine dice buon anno
//PRIMA VERSIONE CON SETTIMEOUT
/* function countdown() {
   
    setTimeout(function () {

        console.log(10);
    }, 1000);
    setTimeout(function () {
        console.log(9);
    }, 2000);
    setTimeout(function () {
        console.log(8);
    }, 3000);
    setTimeout(function () {
        console.log(7);
    }, 4000);
    setTimeout(function () {
        console.log(6);
    }, 5000);
    setTimeout(function () {
        console.log(5);
    }, 6000);
    setTimeout(function () {
        console.log(4);
    }, 7000);
    setTimeout(function () {
        console.log(3);
    }, 8000);
    setTimeout(function () {
        console.log(2);
    }, 9000);
    setTimeout(function () {
        console.log(1);
    }, 10000);
    setTimeout(function () {
        alert('BUON ANNO!!!!');
    }, 11000);
}
countdown();
 */


var secondi = 10;
var myinterval = setInterval(countdown, 1000)

function countdown() {
    secondi--;
    if (secondi == 0) {
        console.log('buon anno!!!');
        alert('buon anno!!!');
    } else {
        console.log(secondi);
    }
}