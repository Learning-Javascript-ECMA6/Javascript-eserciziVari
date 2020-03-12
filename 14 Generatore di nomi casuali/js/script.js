//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
//mmm

var nome = ["vale ", "sabrina ", "mario "];
console.log(nome);
var cognome = ["giannone", "chiaradia","rossi"];
console.log(cognome);

var listaInvitati = [];
console.log(listaInvitati);


 for (var i = 0; i <3 ; i++){
  var nomerand = Math.floor(Math.random() * nome.length);
  var cognomerand = Math.floor(Math.random() * cognome.length);
  var nomecognome = nome[i] + " " + cognome[i];
  listaInvitati.push(nomecognome);
 }
console.log(listaInvitati);
