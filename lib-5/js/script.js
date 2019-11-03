//Quanti minuti mancano alla fine dell’ora?


var date ;

date = new Date();
console.log(date);

min = date.getMinutes();
console.log(min);

result = (60 - min);
console.log("mancano " + result + " minuti alla fine dell'ora");
document.writeln ("Mancano " + result + " minuti alla fine dell'ora.")
