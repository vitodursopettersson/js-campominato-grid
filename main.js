'use strict'

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, 
// la cella cliccata si colora di azzurro ed emetto un messaggio in console
// con il numero della cella cliccata.

// Tasto per azionare il gioco
// Dropdown per scegliere la difficoltà
// - in base alla difficoltà inesrire il numero di caselle da generare
// Crezione della griglia
// - Creare un elemnto div con una classe e un contenuto variabile
// - Creare un ciclo per N volte della creazione dell'elemento e 
//   aggiungere la classe in base alla difficoltà scelta (per la sua dimensione)
// Quando clicco sul tasto Play prima resetta il campo di gioco

// Play Button
const playButton = document.getElementById('play-button');
playButton.addEventListener('click', function () {
    let cellNumber = setDifficulty();
    console.log(`genero griglia composta da: ${cellNumber} celle`)

});

// Set Difficulty
function setDifficulty(cellNumber) {
    const difficulty = document.getElementById('set-difficulty').value;
    if (difficulty === '3') {
        console.log('hai selezionato hard');
        cellNumber = 49
    } else if (difficulty === '2') {
        console.log('hai selezionato medium');
        cellNumber = 81
    } else {
        console.log('hai selezionato easy');
        cellNumber = 100
    }
    return cellNumber
}

