"use strict";
console.clear();

// Stampa le potenze di 2 fino a 1000.


let powResult = 0;

for (let p = 0; powResult <= 1000; p++) {
    let base = 2;
    powResult = Math.pow(base, p);
    if (powResult <= 1000) {
        console.log(powResult);
    }
}


