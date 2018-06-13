const height = 600;
const width = 600;
let gridSize = 16;
let squareSize = height/gridSize;

const container = document.getElementById('cont');


function createGrid() {


    for (let i = 0; i < gridSize; i++) {

        const row = document.createElement('div');

        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.style.backgroundColor = "white";
            cell.style.height = squareSize + "px";
            cell.style.width = squareSize + "px";
            cell.addEventListener("mouseover", color);
            row.appendChild(cell);
        }
    cont.appendChild(row);

    }

}

function color() {

    this.style.backgroundColor = "#c0c0c0";
}


function newGrid() {
    gridSize = prompt("Enter new grid size!", 16);
    container.innerHTML = "";
    squareSize = height/gridSize;
    createGrid();
}



createGrid();
