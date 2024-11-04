"use strict";
console.clear();

/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array*/

// steps

// 1 - Creare un array vuoto
// 2 - Definire una condizione, dove solo i numeri dispari verranno pushati nell'array vuoto

const oddsNumbers = [];


for (let i = 0; i <= 6 - 1; i++) {

    let userNumber = parseInt(prompt("Per favore inserire un numero (Ripetere 6 volte)"));
    console.log(userNumber);

    if

        (userNumber % 2 !== 0) {

        oddsNumbers.push(userNumber);
    }
}

console.log(oddsNumbers);







