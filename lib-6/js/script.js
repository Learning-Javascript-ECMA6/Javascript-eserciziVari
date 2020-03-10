//Inserisci con due prompt l’età di due
//persone (persona1, persona2) e stampa a schermo il numero più grande.

//chiedo all'utente uno l'età
eta1 = parseInt(prompt("Ciao utente uno, quanti hanni hai?"));
console.log("l'età della prima persona è " + eta1);

//chiedo all'utente due l'età
eta2 = parseInt(prompt("Ciao utente due, quanti hanni hai?"));
console.log("l'età della seconda persona è " + eta2);

// se l'età dell'utente uno è maggiore del due
if (eta1>eta2) {
 console.log("l'utente più grande è : " + eta1);
 document.writeln("L'utente più grande è : " + eta1, ".");
} // se è uguale
else if(eta1===eta2){
 console.log('Avete la stessa eta.');
 document.writeln("Avete la stessa età");
} // se è minore 
else{
 console.log("l'utente più grande è : " + eta2);
 document.writeln("L'utente più grande è : " + eta2, ".");
}
