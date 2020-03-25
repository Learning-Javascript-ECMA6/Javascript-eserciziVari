$(document).ready(function () {

// Creare una piccola sezione FAQ. Tante domande che quando cliccate visualizzano la risposta corrispondente.

    
    $('.question').click(function () {
       $(this).find('p').slideToggle(1000);
    });
   
// Creare una To do List. On click su un item verrà cancellata la riga.
// Una volta che l’item è nascosto, far comparire un modal: “Item Cancellato” e farlo scomparire subito dopo.

    $('.delete').click(function () {
        $(this).parent('li').hide(1000 , function() {
            $('#modal').show(1000, function() {
                $('#modal').fadeOut(3000);
            });
        });
    }); 
    


});

