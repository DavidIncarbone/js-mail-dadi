"use strict";
console.clear();

/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

// Steps

// 1 - Creare una funzione con valore di ritorno per generare un numero random da 1 a 6;
// 2 - Inizializzare 2 variabili, una per l'utente, l'altra per il pc
// 3 - Chiamare la funzione dentro le variabili e stampare il risultato di entrambe
// 4 - Creare una condizione dove se il numero dell'utente è maggiore rispetto a quello del pc ha vinto, altrimenti ha perso (stampare relativi messaggi)

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}
const userNumber = randomNumber(1, 6);
const pcNumber = randomNumber(1, 6);
console.log(`Il tuo numero è ${userNumber},`, `mentre il numero del PC è ${pcNumber}.`);

if (userNumber > pcNumber) {

    console.log("Complimenti, hai vinto!");

} else if ((userNumber < pcNumber)) {

    console.log("Spiacente, purtroppo hai perso");

} else {

    console.log("Tu e il pc avete pescato lo stesso numero, abbiamo quindi un pareggio!");

}