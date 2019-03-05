
let gridSize = 16;
const container = document.querySelector("#container");
let initial = 0;

let squares = [];

function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max -min +1)) + min;
}


for(let i = 0; i < gridSize; i++ ){

    for(let j = 0; j < gridSize; j++ ){
        
        squares[(i * gridSize) + j] = document.createElement('div');
        squares[(i * gridSize) + j].classList.add("pixel");
        squares[(i * gridSize) + j].style.cssText = `height: ${700/gridSize}px; width: ${700/gridSize}px;
            border-bottom: ${1/gridSize}px solid gray;  border-right: ${1/gridSize}px solid gray;`;
        container.appendChild( squares[(i * gridSize) + j] );   
    }
    
}


squares.forEach( (square) => {
    square.addEventListener('mouseenter', (e) => {
        e.target.style.background = 'black';
    });
});
/*
squares.forEach( (square) => {
    square.addEventListener('mouseenter', (e) => {
        if(e.target.style.background == "white")
        e.target.style.background = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`;
        else
        e.target.style.background =
    });
});
*/