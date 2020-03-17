/* Un alert espone 5 numeri casuali.Da li parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. 
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati * /
 */

var nGen;
var nRad = [];
function getRandom(min, max) {
    for (var i = 0; i < 5; i++) {
        nGen = Math.floor(Math.random() * (max - min + 1)) + min;
        nRad.push(nGen);
    }
    return nRad;
}

var res = getRandom(1, 10);
console.log('numeri da memorizzare : ' + res);

setTimeout(myFunction, 2000);
function myFunction() {
    alert('ciao memorizza questi numeri : ' + res);
}

var nUtente;
var nMem = [];

setTimeout(myFunction2, 4000);
function myFunction2() {
    j = 0;
    while (j < 5) {
        nUtente = parseInt(prompt('inserisci i numeri memorizzati'));
        console.log('numeri utente : ' + nUtente);
        if (nRad.includes(nUtente) == true) {
            nMem.push(nUtente);
        }
        j++;
    }
    console.log(nMem);

    if (nMem.length == 0) {
        console.log("Mi dispiace, non hai indovinato nessun numero");
       
    } else if (nMem.length == 1) {
        console.log("Il tuo punteggio è " + nMemi.length + ". Hai indovinato solo questo numero " + nMem + "!");
        
    } else if (nMem.length == 5) {
        console.log("Complimenti, hai vinto!");
        d
    } else {
        console.log("Il tuo punteggio è " + nMem.length + ". Questi sono i numeri che hai indovinato " + nMem + "!");
        
}
