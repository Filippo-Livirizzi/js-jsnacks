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