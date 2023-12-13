/* 

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/


const buttonStart = document.getElementById ('start');
console.log(buttonStart);

const container = document.querySelector ('.container');
console.log(container);

buttonStart.addEventListener ("click", function (){

    let grid = document.createElement('div');
    grid.classList.add('numbers-grid');
    container.append(grid);
    console.log(grid);

    for ( i = 1; i <= 100 ; i++ ) {
        const cella = document.createElement ('div');
        cella.classList.add('cell-style');
        cella.innerHTML= i;
        grid.append(cella);
        console.log(cella);
        buttonStart.classList.add('button-start-display');
    }

    

})