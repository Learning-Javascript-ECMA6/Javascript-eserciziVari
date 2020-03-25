
   /*  Creare una griglia formata da 8x8 quadratini tutti bianchi.
    15 di questi quadratini(scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi Opzionale: 
    Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti
 */

 var scoreRed = 0;
 var scoreGreen = 0;

 //funzione che genera le 64 caselle 

 function generateCells() {
     for (var i = 0; i < 64; i++) {
        $('.container').append('<div class="item"></div>');
     }
 }


//funzione che genera 15 numeri casuali non uguali tra loro
function generateRandomNumbers() {
    var numbers = [];
    while (numbers.length < 15) {
        var numero = getRandomNumber(0, 64);
        if (!numbers.includes(numero)) {
            numbers.push(numero);
        }
    }
    return numbers;
}


//funzione che genera un numero random contenuto in un range
 function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
 } 


//funzione che si occupa di inserire l'attributo per le celle rosse
function generateRedCells(redCells) {
    for (var i = 0; i < redCells.length; i++) {
        var posizione = redCells[i];
        var elemento = $('.item').eq(posizione);
        console.log(elemento);
        elemento.attr('data-color', 'red');
    }
}

//funzione che aggiorna sull'html il punteggio 
function updateScore(){
    $('.score.red').text(scoreRed);
    $('.score.green').text(scoreGreen);

    //condizione di vittoria
    if(scoreGreen===(64-15)){
        alert('Hai vinto!!!Il tuo punteggio finale è di' + scoreGreen + 'punti.');
    }
    if(scoreRed===15){
        alert('Hai perso!!! Hai totalizzato ' + scoreRed + 'punti.');
    }
}

$(document).ready(function () {
    //genera le caselle
    generateCells();
    
    //generiamo 15 celle rosse
    var redCells = generateRandomNumbers(); 
    //console.log(redCells);

    generateRedCells(redCells);
   
    $('.item').click(function(){
        var elemento = $(this);
        //console.log(elemento);

        //controllo che non esista la classe red e green 
        if (!elemento.hasClass('red') && !elemento.hasClass('green')){
            //controllo che esista o meno l'attributo
            var attributo = elemento.attr('data-color');
            //console.log('attributo', attributo);

            //se l'attributo ha red è una cella rossa 
            if (attributo == 'red') {
                elemento.addClass('red');
                scoreRed++;
            } else {// la cella verde
                elemento.addClass('green');
                scoreGreen++;
            }
            //aggiorno il punteggio 
            updateScore();
        
        }
    });
    //imposto il punteggio iniziale
    updateScore();
});