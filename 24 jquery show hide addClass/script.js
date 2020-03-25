$(document).ready(function () {

  //Data una struttura html selezionare gli elementi indicati e applicare loro una class con addClass
  
  /*  $('p').addClass('purple');
  /*  $("button").click(function () {
       getRandom() ;
   }); 
   $('h1').addClass('yellow');
   $('id').addClass('miaClass');

*/


  /* Creare un bottone che on hover aggiunga una classe che cambia il colore del testo e la toglie quando il mouse esce dal bottone.
  Con il doppio click cambio il testo in “cliccato”.Con un click solo non fa niente
*/
  /* $('span, #id').hide(3000);
  $('span, #id').show(2000); 
  $('.classe, p').fadeIn('fast'); 
  $('.classe, p').fadeOut('fast');

  $("button").on({   
          mouseenter: function () {
          $("div.test").addClass("purple");
      }, mouseleave: function () {
          $("div.test").removeClass("purple");
      }, dblclick: function(){
          $("button ").text("valentina") ;
      }
  });
*/
  //Creare il titolo di un paragrafo e un bottone che permette di espandere il testo inizialmente nascosto

  $('p').hide();
  $("button").click(function () {
    $('p').show(2000);

  });
  $('p').mouseenter(function () {
    $("p").addClass("size");
  })
  $('p').mouseleave(function () {
    $("p").removeClass("size");
  })


  // Rendere visibile la scritta “Live Coding” dentro il cerchio arancione quando passo con il mouse sul cerchio.
  $('span').hide();
  $('#id3').mouseenter(function () {
    $('span').show();
  })

  $('span').mouseleave(function () {
    $("span").hide();
  })

});