const GRID_LENGTH = 720;

const grid = document.querySelector("#grid");

for(let i = 0; i < 256; i++){
    const aBlock = document.createElement("div");
    aBlock.classList.add("block");
    grid.appendChild(aBlock);
}

const blocks  = document.querySelectorAll(".block");
blocks.forEach(addHoverListener);

function addHoverListener(currentBlock){
    currentBlock.addEventListener("mouseover", () => currentBlock.classList.add("active"));
}

const gridButton = document.querySelector("button");
gridButton.addEventListener("click", alterGrid);


function createBlocks(userInput){
    const amtOfBlocks = userInput ** 2;
    const blockWidth = GRID_LENGTH / userInput - 2;         // -2 makes room for borders
    for(let i = 0; i < amtOfBlocks; i++){
        const aBlock = document.createElement("div");
        aBlock.classList.add("block");
        aBlock.style.width = `${blockWidth}px`;
        aBlock.addEventListener("mouseover", () => aBlock.classList.add("active"));
        grid.appendChild(aBlock);
    }
}

function removeBlocks(){
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function alterGrid(){
    let userInput = +prompt("How many blocks per side for new grid? (max 100): ");
    if(typeof userInput == "number" && userInput <= 100 && userInput > 0){
        removeBlocks();
        createBlocks(userInput);
    }
}