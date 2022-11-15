/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

//scelta utente e numero
let scelta = prompt("pari o dispari?");
console.log("scelta utente " + scelta);

let userNum = parseInt(prompt("butta un numero tra 1 e 5"));
console.log("numero utente " + userNum);

//numero computer
let pcNum = randomNum(1, 5);
console.log("numero computer " + pcNum);

//somma
somma = pariDisp(userNum + pcNum);

//stabilisci chi ha vinto
if (somma === scelta) {
    console.log("hai vinto")
} else {
    console.log("il computer ha vinto")
}



//funzioni
function randomNum (min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function pariDisp (numero){
    if (numero % 2 === 0){
        return "pari";
    } else {
        return "dispari";
    }
}