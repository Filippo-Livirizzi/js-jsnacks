// //JSnack 5 
/*Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array. Stampa l'array alla fine.*/
 let lista = [];
 for (let i = 0; i <6; i++){
     let number = prompt("inserisci un numero:"); 
     if(number % 2 !==0){
        lista.push(number); 
     }
 }
console.log("Ecco i numeri dispari:", lista)