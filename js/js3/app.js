//JSnack 3

let numeri = []; //creo array
let sum = 0;
//apro un ciclo for
for (let j = 0; j < 10; j++) {
    numeri.push(prompt("Inserire un numero:"));
    console.log(numeri);
}
for (let i =0; i<numeri.length; i++){
    const num = numeri[i];
    console.log(num);
    sum += num;
}
console.log(sum);