$(document).ready(function () {

    // Ricreare un titolo di un paragrafo che cliccato mostra il testo sottostante 
    //ma utilizzare toggle per la sua visualizzazione.

    $(".btn").click(function () {
        $('.tenda').slideToggle(2000);
       
    });

    setTimeout(myFunction, 3000);
    function myFunction() {
        $('p').css('visibility', 'visible');
    }
    
    $('.test').html('Ciao').css('color', 'blue');

    





});