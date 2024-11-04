"use strict";
console.clear();

/*Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.*/

// Steps



const totalNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const userNumbers = parseInt(prompt("Inserire i primi numeri da voler elevare al cubo"));
console.log(`I numeri totali sono ${totalNumbers}. I primi ${userNumbers} sono da elevare al cubo.`);
let cubeNumbers = [];
cubeNumbers = totalNumbers.slice(0, userNumbers);
console.log(cubeNumbers);

for (let i = 0; i < cubeNumbers.length; i++) {

    const cubeResults = cubeNumbers[i] * cubeNumbers[i] * cubeNumbers[i];
    console.log(cubeResults);

}





