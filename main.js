
let gridSize = 16;
const container = document.querySelector("#container");
let index = 0;
let select = 0;

let squares = [];
let squareR = [];
let squareG = [];
let squareB = [];

const blackGrid = document.querySelector('#black');
blackGrid.addEventListener('click', () => { resetBoxes(); select=0;});

const colored = document.querySelector('#colored');
colored.addEventListener('click', () => {resetBoxes(); select=1;});

const resetBtn = document.querySelector('#reset');

function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max -min +1)) + min;
}

function resetBoxes(){
    squares.forEach( (square) => {
        square.style.background = "white";
    });
}

function createSquares(){
    while(container.firstChild) {
        container.removeChild(container.firstChild);
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
           
            if (select == 0)
            e.target.style.background = 'black';
            else {
                index = squares.indexOf(e.target);
              
                if(e.target.style.background == "" || e.target.style.background == "white"){
                    squareR[index]= getRandomInt(0,255);
                    squareG[index]= getRandomInt(0,255);
                    squareB[index]= getRandomInt(0,255);
                    e.target.style.background = `rgb(${squareR[index]},${squareG[index]},${squareB[index]})`;
                }
                else{
                squareR[index] = squareR[index] - (squareR[index]/10);
                if(squareR[index]< 0) squareR[index] = 0;
        
                squareG[index] = squareG[index] - (squareG[index]/10);
                if(squareG[index]< 0) squareG[index] = 0;
        
                squareB[index] = squareB[index] - (squareB[index]/10);
                if(squareB[index]< 0) squareB[index] = 0;
        
                e.target.style.background = `rgb(${squareR[index]},${squareG[index]},${squareB[index]})`;
                } 
            }
        });
    });

}

createSquares();

resetBtn.addEventListener('click', () => {resetBoxes(); gridSize=prompt("Enter grid Size", 16);createSquares();});

