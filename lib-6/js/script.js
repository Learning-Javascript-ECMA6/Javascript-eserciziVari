//Inserisci con due prompt l’età di due
//persone (persona1, persona2) e stampa a schermo il numero più grande.

eta1 = parseInt(prompt("Ciao utente uno, quanti hanni hai?"));
console.log("l'età della prima persona è " + eta1);

eta2 = parseInt(prompt("Ciao utente due, quanti hanni hai?"));
console.log("l'età della seconda persona è " + eta2);

if (eta1>eta2) {
 console.log("il numero più grande è : " + eta1);
 document.writeln("Il numero più grande è : " + eta1, ".");
}
else{
 console.log("il numero più grande è : " + eta2);
 document.writeln("Il numero più grande è : " + eta2, ".");
}
