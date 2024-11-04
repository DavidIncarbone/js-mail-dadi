"use strict";
console.clear();

// Calcola la somma e la media dei primi 10 numeri.

// steps

// 1 - Creare un array con più di 10 numeri;
// 2 - Estrarre i primi 10 e metterli in un altro array
// 3 - Con un ciclo for della lunghezza del secondo array, calcolare la somma totale dei 10 numeri estratti
// 4 - Calcolare la media

const totalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
];
console.log(totalNumbers);
const choiceNumbers = totalNumbers.slice(0, 10);
let sum = 0;
for (let i = 0; i < choiceNumbers.length; i++) {
    sum += choiceNumbers[i];
}
let media = sum / choiceNumbers.length;
console.log(`La somma dei primi 10 numeri è ${sum}, mentre la media è ${media}`);
