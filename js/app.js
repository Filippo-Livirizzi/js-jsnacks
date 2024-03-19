// /* JSnack 1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.*/
// let numeri = []; //creo un array vuoto
// //tramite il prompt faccio inserire due numeri all'utente e li pusho dentro l'array vuoto
// numeri.push(prompt("inserire un numero:")); 
// numeri.push(prompt("inserire un numero:"));
// //SE il primo numero dell'array è minore del secondo, sulla console verrà stampata la seconda cifra
// if (numeri[0]<numeri[1]){
//     console.log(numeri[1]);
// }else if(numeri[0]>numeri[1]){ //ALTRIMENTI SE il primo numero dell'array è maggiore del secondo, sulla console verrà stampata la prima cifra
//     console.log(numeri[0]);
// }else if (numeri[0]=== numeri[1]){ //ALTRIMENTI SE nell'array si ripete la stessa cifra verrà visualizzato un messaggio
//     alert("Non inserire la stessa cifra");
// }

//--------------------------------------------

//JSnack 2

// /*L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.*/
// let parola = []; //creo un array vuoto
// parola.push(prompt("inserire una parola")); 
// parola.push(prompt("inserire una parola"));
// if(parola[0].length < parola[1].length){
//     console.log(parola[0]);
//     console.log(parola[1]);
// }
// if(parola[0].length > parola[1].length){
//     console.log(parola[1]);
//     console.log(parola[0]);
// }

//---------------------------------------------------------

//JSnack 3

// let numeri = []; //creo array
// //apro un ciclo for
// for (let j = 0; j < 10; j++) {
//     numeri.push(prompt("Inserire un numero:"));
//     console.log(numeri);
// }
// //fare la somma dei numeri

//--------------------------------------------------------

//JSnack 4
/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/ 

// const lista = ["Tiberio", "Cesare", "Claudio", "Augusto"]; //array con i nomi degli invitati
// let nome = prompt("inserisci il tuo nome:"); //l'utente inserisce il proprio nome
// let invitati = lista.includes(nome); // verifica se il nome inserito dal utente è presente nell'array
// if (invitati) { 
//     alert("Benvenuto alla festa!");
// } else {
//     alert("Mi dispiace, non sei invitato/a alla festa.");
// }

//--------------------------------------------------------

// //JSnack 5 
// /*Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array. Stampa l'array alla fine.*/
// let lista = [];
// for (let i = 0; i <6; i++){
//     let number = prompt("inserisci un numero:"); 
//     if(number % 2 !==0){
//        lista.push(number); 
//     }
// }
// console.log("Ecco i numeri dispari:", lista)

//-------------------------------------------------------
//JSnack 6 
/*Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero.
Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti ha perso. */
// let computer = Math.floor(Math.random() * 11); //restituisce alla variabile "computer" un numero casuale da 0 a 10
// let utente = parseInt(prompt ("Inserire un numero da 0 a 10:"));

// if (utente === computer ){
//     alert("Hai vinto!");

// }else {
//     alert("Riprova");
// }
// console.log("numero casuale:",computer, "numero inserito dall'utente",utente);

//------------------------------------------------------
//JSnack 10
/*Scrivere un programma a cui venga chiesto all'utente di inserire numeri uno dopo l'altro.
Quando l'utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.*/
// Array per memorizzare i numeri inseriti dall'utente
var numeriInseriti = [];

// Variabile per memorizzare il numero precedente inserito dall'utente
var numeroPrecedente= [];

while (true) {
    var numero = prompt("Inserisci un numero:");

    // Verifica SE il numero inserito è uguale al numero precedente
    if (numero === numeroPrecedente) {
        alert("numero già inserito");
        break; //esce dal ciclo
        
    } else{   
        numeriInseriti.push(numero);
        numeroPrecedente = numero
    }


}

// Stampa i numeri inseriti dall'utente
console.log("Numeri inseriti dall'utente:", numeriInseriti);
