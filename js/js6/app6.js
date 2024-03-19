//JSnack 6 
/*Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero.
Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti ha perso. */
 let computer = Math.floor(Math.random() * 11); //restituisce alla variabile "computer" un numero casuale da 0 a 10
 let utente = parseInt(prompt ("Inserire un numero da 0 a 10:"));

 if (utente === computer ){
     alert("Hai vinto!");

 }else {
     alert("Riprova");
 }
 console.log("numero casuale:",computer, "numero inserito dall'utente",utente);
