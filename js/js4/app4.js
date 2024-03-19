/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/ 

const lista = ["Tiberio", "Cesare", "Claudio", "Augusto"]; //array con i nomi degli invitati
let nome = prompt("inserisci il tuo nome:"); //l'utente inserisce il proprio nome
let invitati = lista.includes(nome); // verifica se il nome inserito dal utente è presente nell'array
if (invitati) {   
alert("Benvenuto alla festa!");
} else {
    alert("Mi dispiace, non sei invitato/a alla festa.");
}