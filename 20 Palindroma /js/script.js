
//effettuare dei controlli con più funzioni per capire se la frase è palindroma

function clearString(stringa) {
    //utilizzo una funzione per togliere spazi, maiuscole e minuscole;
    return stringa.toLowerCase().replace(/\s/g, "");
}

function stringReverse(par) {
    //utilizzo una funzione per ribaltare la frase attraverso il ciclo for;
    var wordReverse = '';

    for (var i = par.length - 1; i >= 0; i--) {
        console.log(par);
        wordReverse += par[i];
    }
    return wordReverse;
}

function checkPalindroma(par) {
    //utilizzo una funzione per eseguire le condizioni dove richiamo le altre funzioni con rispettivi controlli
    if (clearString(par) === stringReverse(clearString(par))) {
        //se è uguale è palindroma
        console.log('sono palindroma');
        document.getElementById('id').innerHTML = '"' + parola + '"' + ' è una frase palindroma.';
    } else {
        //altrimenti no.
        console.log('non sono palindroma');
        document.getElementById('id').innerHTML = '"' + parola + '"' + 'non è una frase palindroma.';
    }
}

var parola = "Amo ridere di Roma";
/* console.log('frase da controllare : ', parola);

checkPalindroma(parola);
console.log('verifico le condizioni.', checkPalindroma(parola));

stringReverse(parola);
console.log('ribalto la frase : ', stringReverse(parola));

clearString(parola);
console.log('tolgo maiuscole e spazi : ', clearString(parola)); */

//ESERCIZIO : crea una funzione per capire se la parola è palindroma

//chiedo la parola all'utente
//inverto la parola
//la confronto

//chiedo la parola all'utente
var ask = prompt("inserisci una parola");
console.log(ask);

//invoco la funzione
var parolareverse = reverse(ask);

//creo la funzione
function reverse(text) {
    //creo una stringa vuota
    var askreverse = "";
    // utilizzo il ciclo for per attraversare la stringa
    for (var i = 0; i < text.length; i++) {
        console.log(text[i]);
        askreverse = text[i] + askreverse;
        console.log(askreverse);
    }
    return askreverse;
}

//la confronto e  stampo in pagina
if (ask === parolareverse) {
    console.log("è palindroma");
    document.writeln("La parola " + ask + " è palindroma")
} else {
    console.log("non è palindroma");
    document.writeln("La parola " + ask + " non è palindroma")
}




//terzo esempio 
const palindrome = str => {
 if(str === str.split("").reverse().join("")
){
 console.log("è palindroma");
} else {
 console.log("non è palindroma");
}
};
 palindrome("otto");


//sopra la panca la capra campa inverti la frase 
var textCrypted = 'arpos al acnap al arpac apmac';

var arrayTextCrypted = textCrypted.split(' ');
console.log(arrayTextCrypted);

var stringaFinale = '';
var word;
var wordDecrypted;
function ribalta(frase) {
    for (var i = 0; i < arrayTextCrypted.length; i++) {
        word = arrayTextCrypted[i]; //singola parola
        wordDecrypted = '';//salvo la parola decriptata

        for (var j = word.length - 1; j >= 0; j--) { //eseguo un ciclo per attravesare l'array al contrario
            //console.log(word[j]);
            wordDecrypted += word[j];
        }

        wordDecrypted += ' '; // inserisco uno spazio tra le parole 
        console.log(i, wordDecrypted);
        stringaFinale += wordDecrypted;

    }
    console.log('stringa finale: ', stringaFinale);
    return stringaFinale;
}

var res = ribalta(textCrypted);