/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Dare output relativo.*/

//chiedi parola
let parola = prompt("inserire parola");
console.log(parola);

//capire se la parola inserita è palindroma
let parolaInvertita = invert(parola);
console.log(parolaInvertita);

if (parolaInvertita === parola) {
    console.log("la parola è palindroma");
} else {
    console.log("la parola non è palindroma");
}

//funzione per trasformare parola in array di caratteri, ribaltare array e fare nuova stringa per il confronto
function invert(word){
    let reverseWord = word.split('').reverse().join(''); 

    return reverseWord;
}