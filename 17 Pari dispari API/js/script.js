/*Creare due div; uno conterrà numeri dispari di colore rosso e l’altro conterrà numeri pari in verde. Ad ogni click di un bottone chiedere all’API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.*/
//non completo
//funzione generale jquery
$(document).ready(function(){


 var questoQuadrato = $(this);

 $(".container").click(function() {

 $.ajax ({
   url : "https://flynn.boolean.careers/exercises/api/random/int",
   method : "GET",
   success : function (numeroRandom) {
     var num = numeroRandom.response;
     if (num % 2 === 0) {
       $(questoRisultato).html(".rosso");
       $(questoQuadrato).addClass(".rosso");
     } else if  {
       $(questoRisultato).html(".verde");
       $(questoQuadrato).addClass(".verde");
     }
   },
   error : function () {
     alert("Error N° " + errore);
   }
 });

})



 });
