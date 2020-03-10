//Quanti minuti mancano alla fine dell’ora?

//assegno alla variabile il valore con il giorno e l'ora utilizzando la funzione
date = new Date();
console.log(date);

//prendo solo i minuti utilizzando la funzione 
min = date.getMinutes();
console.log(min);

//calcolo 60(minuti in un ora) meno i minuti presi dalla variabile min
result = (60 - min);

//stampo in pagina
console.log("mancano " + result + " minuti alla fine dell'ora");
document.writeln ("Mancano " + result + " minuti alla fine dell'ora.")

//finito