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


//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

var primaParola = prompt('inserisci una parola');
var secondaParola = prompt('inserisci un altra parola');

if (primaParola.length > secondaParola.length) {
    document.getElementById('id').innerHTML = 'La parola piu corta è : ' + secondaParola + ' , mentre la parola più lunga è : ' + primaParola;
    console.log('parola piu corta : ', secondaParola, ' , parola più lunga è : ', primaParola);
} else if (primaParola.length < secondaParola.length) {
    document.getElementById('id').innerHTML = 'La parola piu corta è : ' + primaParola + ' , mentre la parola più lunga è : ' + secondaParola;
    console.log('parola piu corta : ', primaParola, ' , parola più lunga è : ', secondaParola);
} else {
    document.getElementById('id').innerHTML = 'Le due parole sono uguali';
    console.log('le due parole sono lunghe uguali');
}