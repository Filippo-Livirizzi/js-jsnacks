//JSnack 2

// /*L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.*/
let parola = []; //creo un array vuoto
parola.push(prompt("inserire una parola")); 
parola.push(prompt("inserire una parola"));
if(parola[0].length < parola[1].length){
    console.log(parola[0]);
    console.log(parola[1]);
}
if(parola[0].length > parola[1].length){
    console.log(parola[1]);
    console.log(parola[0]);
}