"use strict";
console.clear();

/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email*/

// Obiettivo: Controllare se la mail inserita dall'utente sia presente nella lista

/*Steps

1 - Creare un array con la lista di e-mail di chi può accedere

2 - Creare un prompt di tipo stringa per chiedere all'utente di inserire la propria mail

3 - Verificare se la mail dell'utente è presente nel nostro array.*/

const mailAbilited = [
    "pippo@gmail.com",
    "pluto@gmail.com",
    "paperino@gmail.com",
    "topolino@gmail.com",
    "minnie@gmail.com",
];

const userMail = prompt("Per favore, inserisci la tua e-mail");

console.log(userMail);

if (mailAbilited.includes(userMail)) {

    console.log("Complimenti, puoi accedere al servizio!");

} else {

    console.log("Spiacente, questa mail non è abilitata all'accesso");
}



