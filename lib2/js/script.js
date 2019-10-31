
//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
//E scrivi sulla pagina nomecognomecolorepreferito19
//Hai creato un (insicurissimo) password generator!

//Chiedo all’utente il suo nome
var nome = prompt("come ti chiami?")
 console.log("il nome utente sarà : " + nome );

//Chiedo all’utente il suo cognome
var cognome = prompt("qual è il tuo cognome?")
 console.log("il cognome utente sarà : " + cognome );

//Chiedo all’utente il suo colore preferito
var colore = prompt("qual è il tuo colore preferito?")
 console.log("il colore preferito sarà : " + colore );

//genero la password sommando nome cognome colorepreferito e aggiungo n 
 risposta = (nome + cognome + colore + 14);
 console.log("allora la password utente sarà : " + risposta);
 document.writeln("ciao " + nome +  " la tua nuova password è : " + risposta);
