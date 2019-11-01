//Gioco dei dadi, chi fa di più vince

var giocatore1 = Math.floor(Math.random() * 5) + 1;
console.log(giocatore1);
document.writeln("Il tuo numero è : ", giocatore1, " , ");

var giocatore2 = Math.floor(Math.random() * 5) + 1;
console.log(giocatore2);
document.writeln("Il numero del pc è : ", giocatore2 , " , ");

if (giocatore1 > giocatore2){
 console.log("hai vinto " );
 document.writeln("Hai vinto.")
} else if (giocatore1===giocatore2){
 console.log("parità");
  document.writeln("Pareggio.")
}
else{
 console.log("hai perso");
 document.writeln("Hai perso.")
}
