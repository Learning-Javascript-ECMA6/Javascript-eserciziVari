//Genero 10 numeri random utilizzando una funzione
var result;

for (var i = 0; i < 10; i++) {
    var result = generaNumero(10, 1);
    console.log('genero 10 numeri random : ', result);
}

function generaNumero(max, min) {
    var numeroGenerato = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroGenerato;
}



//Verifico attraverso una funzione se il numero passato dell’utente è pari o dispari

var num = prompt('segli un numero');

function pariOdisp(num) {
    var divisione = num % 2 == 0;
    return divisione;
}

var res = pariOdisp(num);
console.log(res);

if (res === true) {
    console.log(' il numero è pari');
} else {
    console.log('il numero è dispari');
}



//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

//chiedo all'utente di scegliere un numero
userNumber = parseInt(prompt("Ciao, scegli un numero."));
console.log(somma(userNumber));


function somma(sfida){
 console.log(somma);
 var risultato;
    if(userNumber % 2 === 0){
        risultato = userNumber;
        console.log("stampa il risutato uguale al numero inserito" , risultato, "se è pari");
          // se è pari
    } else {
        risultato = userNumber + 1;
        console.log("stampa il risultato con l'aggiunta di un numero ", risultato , "se è dispari");
        // se è dispari
    }
    return risultato;
}


//L’utente sceglie pari o dispari e un numero da 1 a 5.
//Generiamo un numero random(sempre da 1 a 5) per il computer.
//Sommiamo i due numeri e dichiariamo chi ha vinto.

var user = prompt('scegli pari o dispari');
console.log('scelta user : ', user);

var userNum = parseInt(prompt('scegli un numero da 1 a 5 '));
console.log('numero user : ', userNum);

function getRandomInt(min, max) {

    return parseInt(Math.floor(Math.random() * (max - min)) + min); //Il max è escluso e il min è incluso
}

var numPc = getRandomInt(1, 5);
console.log('numero pc : ', numPc);

function somma(par1, par2) {
    return par1 + par2;
}
var sommaNumero = somma(numPc, userNum);
console.log('somma numeri utente/pc : ', sommaNumero);

function win() {
    if (sommaNumero % 2 == 0) {
        console.log('vince il pari');
    } else {
        console.log('vince il dispari');
    }
}

win();