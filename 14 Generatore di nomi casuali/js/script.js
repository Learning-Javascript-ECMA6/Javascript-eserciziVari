//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

var nome = ['sabrina', 'giosue', 'ornella', 'renata', 'tiziana', 'carla', 'antonio'];
console.log(nome);
var cognome = ['chiaradia', 'giannone', 'maranci', 'garbelli', 'micciche', 'cagnolino', 'fighetto'];
console.log(cognome);

var listaInvitati = [];
console.log('prima lista' , listaInvitati);

function getRandomInt(par1,par2) {
    var nomerand = Math.floor(Math.random() * nome.length);
    var cognomerand = Math.floor(Math.random() * cognome.length);
    var nomecognome = nome[nomerand] + " " + cognome[cognomerand];
    listaInvitati.push(nomecognome);
    return nomerand, cognomerand, nomecognome ;
}

for (var i = 0; i < 3; i++) {
    var rand = getRandomInt(nome, cognome);
}

console.log('seconda lista : ' + listaInvitati);



