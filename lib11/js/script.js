
//Chiedi all’utente il suo nome controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato

var list =["vale", "silvia","sabrina","luisa","marco","luca","giacomo","simone","francesco"];
console.log(list);

var nome = prompt("Ciao, come ti chiami?")
console.log(nome);

//creo variabile
 var invito = false;

for (var i = 0; i < list.length; i++) {
console.log(list[i] , i)
if (nome === list[i]){
 invito = true ;
 //se è in lista partecipa
 console.log("è invitato alla festa");
}
};
//se l email non è in lista non partecipa
if (invito === true){
  document.writeln ("Benvenuto alla festa  " + nome + "." );

}else {
 document.writeln  (nome + ",  non sei invitato alla festa !" );
};
