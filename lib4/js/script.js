//gioco del pari o dispari

//chiedo all'utente di scegliere tra pari o dispari
utente = prompt("Ciao, scegli tra pari e dispari")
console.log("utente sceglie : " , utente);

//chiedo all'utente di scegliere un numero da 1 a 5
numero1 = parseInt(prompt("Ora, scegli un numero da 1 a 5"));
console.log("utente sceglie numero : " , numero1);

//genero un numero random
numero2 = parseInt(Math.floor(Math.random() * 5) + 1);
console.log("il pc genera n random : " , numero2);

//sommo numero utente a numero random
somma = numero1 + numero2
console.log("somma numeri utente e pc : " , somma);

//creo variabile risultato
var risultato;

//calcolo se il numero è dispari oppure no
if (somma % 2 === 0) {
 risultato = "pari";
 console.log("il risultato sarà :" + risultato);
}
else {
 risultato = "dispari";
 console.log("il risultato sarà :" + risultato);
}

//se il risultato è uguale alla scelta dell utente allora vincerà
if (risultato === utente) {
 console.log("hai vinto" );
 document.writeln ("Complimenti, hai vinto." );

//altrimenti perde
}else{
 console.log("hai perso" );
 document.writeln ("Mi dispiace, hai perso.");
}

//finito
