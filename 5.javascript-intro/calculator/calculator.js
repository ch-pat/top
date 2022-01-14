const display = document.querySelector(".display");
const clearBtn = document.querySelector("#clear");
const backBtn = document.querySelector("#back");
const signBtn = document.querySelector("#sign");
const smileBtn = document.querySelector("#smile");
const numberButtons = document.querySelectorAll(".number");

function numberClick(event) {
    const n = event.target.textContent;
    if (n == "." && (display.textContent.includes("."))) return;
    if (display.textContent.length < 9) {
        display.textContent += n;
    }
}

function clear() {
    display.textContent = "";
}

function back() {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
}

function sign() {
    if (display.textContent.includes("-")) {
        display.textContent = display.textContent.slice(1);
        return
    }
    display.textContent = "-" + display.textContent;
}

function smile() {
    display.textContent = "5318008";
}

for (let btn of numberButtons) {
    btn.addEventListener('click', numberClick);
}

clearBtn.addEventListener('click', clear);
backBtn.addEventListener('click', back);
signBtn.addEventListener('click', sign);
smileBtn.addEventListener('click', smile);