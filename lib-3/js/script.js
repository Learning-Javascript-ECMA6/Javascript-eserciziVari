//Inserisci due parole, quale è la piu lunga?


//inserisco la prima parola data dall'utente
var parola1 = prompt("inserisci una parola");
console.log("la 1 parola inserita sarà " + parola1);

//inserisco la seconda parola data dall'utente
var parola2 = prompt("inserisci un altra parola");
console.log("la 2 parola inserita sarà " + parola2);

//utilizzo le condizioni per stabilirne la lunghezza
if (parola1>parola2) {
    //se parola1 è maggiore di parola2
    console.log("la parola piu lunga è " + parola1);
    //la parola più lunga è parola1
    document.writeln ("La parola piu lunga è " + parola1 + " .");
}   //viceversa è parola2
    else if (parola2 > parola1){
        console.log("la parola piu lunga è " + parola2);
        document.writeln("La parola piu lunga è : " + parola2 + " .");
    }
    else{
     //se invece sono uguali 
    console.log('le due parole sono uguali');
    document.writeln("Le due parole sono uguali.");
};
