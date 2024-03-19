// /* JSnack 1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.*/
 let numeri = []; //creo un array vuoto
//tramite il prompt faccio inserire due numeri all'utente e li pusho dentro l'array vuoto
numeri.push(prompt("inserire un numero:")); 
numeri.push(prompt("inserire un numero:"));
//SE il primo numero dell'array è minore del secondo, sulla console verrà stampata la seconda cifra
if (numeri[0]<numeri[1]){
    console.log(numeri[1]);
}else if(numeri[0]>numeri[1]){ //ALTRIMENTI SE il primo numero dell'array è maggiore del secondo, sulla console verrà stampata la prima cifra
    console.log(numeri[0]);
}else if (numeri[0]=== numeri[1]){ //ALTRIMENTI SE nell'array si ripete la stessa cifra verrà visualizzato un messaggio
    alert("Non inserire la stessa cifra");
}
