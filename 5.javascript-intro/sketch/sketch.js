function cleanGrid() {
    let n = 16;
    let grid = document.querySelector("#grid");
    let squares = document.querySelectorAll("#grid > *");
    for (let sq of squares) {
        grid.removeChild(sq);
    }
    let size = grid.clientWidth / n;
    let square;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            square = document.createElement("div");
            square.setAttribute("class", "square");
            square.style.width = size - 2 + "px";
            square.style.height = size - 2 + "px";
            square.addEventListener('mouseover', (e) => e.target.style["background-color"] = "black");
            grid.appendChild(square);

        }
    }
}

cleanGrid();
let cleanBtn = document.querySelector("#clean");
cleanBtn.addEventListener("click", cleanGrid);