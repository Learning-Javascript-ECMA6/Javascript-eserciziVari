//Chiedere al visitatore il suo nome e salutarlo
//Quanti anni hai? Allora sei nato nel...

//chiedo all'utente il nome
var nome = prompt("Come ti chiami?");
console.log("il nome dell utente sarà : " + nome);

//saluto l'utente e chiedo l'età
var anni = prompt("Ciao " + nome + ", quanti anni hai?");
console.log("i suoi anni sono :" + anni);

//rispondo mostrando il suo anno di nascita
var risposta = (2019 - anni)
console.log("Benvenuto " + nome + ", sei nato nel  : " + risposta);
document.writeln("Benvenuto " + nome + ", sei nato nel  : " + risposta + ".");

//finito
