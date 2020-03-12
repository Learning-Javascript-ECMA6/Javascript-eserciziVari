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
