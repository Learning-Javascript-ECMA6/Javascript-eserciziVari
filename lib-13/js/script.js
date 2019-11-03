
//non risolto
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
