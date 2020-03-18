/* Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao < nome >”, il colore del nome deve essere azzurro o
rosa a seconda del sesso inserito */

var nome =prompt('come ti chiami?');
var sesso = prompt('sei maschio o femmina?');
var element = document.getElementById('id');

if (sesso == 'maschio') {
    console.log('blu');
    element.innerHTML = 'ciao ' + nome , '.';
    element.style.color = 'blue';
} else if (sesso == 'femmina'){
    element.innerHTML = 'ciao ' + nome , '.';
    element.style.color = 'pink';
    console.log('rosa');
}
 