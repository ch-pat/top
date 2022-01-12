function cleanGrid(event) {
    let n = 16;
    if (event) {
        let eventId = event.target.getAttribute("id");
        if (eventId == "clean" || eventId == "16") {
            n = 16;
        } else if (eventId == "thirtytwo") {
            n = 32;
        } else if (eventId == "sixtyfour") {
            n = 64;
            console.log("hey")
        }
    }
    console.log(n)
    let grid = document.querySelector("#grid");
    grid.textContent = "" // Clean all squares in grid if present
    let size = grid.clientWidth / n;
    let square;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            square = document.createElement("div");
            square.setAttribute("class", "square");
            square.style.width = size - 2 + "px";
            square.style.height = size - 2 + "px";
            square.addEventListener('mouseover', (e) => e.target.style["background-color"] = processColor(e));
            grid.appendChild(square);

        }
    }
}

function switchColor(event) {
    color = "black";
    if (event) {
        let eventId = event.target.getAttribute("id");
        if (eventId == "black") {
            color = "black";
            currentColorChoice = "black";
        } else if (eventId == "gray") {
            color = "gray";
            currentColorChoice = "gray";
        } else if (eventId == "random") {
            color = getRandomColor();
            currentColorChoice = "random";
        }
    }
    let current = document.querySelector("#ccolor");
    current.style["background-color"] = color;
}

function processColor(e) {
    if (currentColorChoice == "black") { return "black" }
    if (currentColorChoice == "random") { 
        let res = getRandomColor()
        let current = document.querySelector("#ccolor");
        current.style["background-color"] = res;
        return res 
    }
    if (currentColorChoice == "gray") {
        let squareColor = e.target.style["background-color"];
        if (squareColor == "" || colorList.includes(squareColor)) { squareColor = 255 }
        else {squareColor = parseFloat(squareColor.slice(4,7)); console.log(squareColor)}
        squareColor -= 25;
        if (squareColor < 0) { squareColor = 0}
        return `rgb(${squareColor}, ${squareColor}, ${squareColor})`
    }
}

function getRandomColor() {
    return colorList[Math.floor(Math.random() * colorList.length)];
}

let color = "black";
let currentColorChoice = "black";
const colorList = ["blue", "red", "yellow", "cyan", "pink", "orange", "bisque", "brown", "blueviolet", "cadetblue", "chocolate", "coral", "greenyellow", "black"];
cleanGrid();

// Add listeners too buttons
let cleanBtn = document.querySelector("#clean");
cleanBtn.addEventListener("click", cleanGrid);

let steenBtn = document.querySelector("#sixteen");
steenBtn.addEventListener("click", cleanGrid);
let ttwoBtn = document.querySelector("#thirtytwo");
ttwoBtn.addEventListener("click", cleanGrid);
let sfourBtn = document.querySelector("#sixtyfour");
sfourBtn.addEventListener("click", cleanGrid);

let blackBtn = document.querySelector("#black");
blackBtn.addEventListener("click", switchColor);
let grayBtn = document.querySelector("#gray");
grayBtn.addEventListener("click", switchColor);
let randomBtn = document.querySelector("#random");
randomBtn.addEventListener("click", switchColor);
