const display = document.querySelector(".display");
const clearBtn = document.querySelector("#clear");
const backBtn = document.querySelector("#back");
const signBtn = document.querySelector("#sign");
const smileBtn = document.querySelector("#smile");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const mulBtn = document.querySelector("#mul");
const divBtn = document.querySelector("#div");
const resBtn = document.querySelector("#result");

const numberButtons = document.querySelectorAll(".number");

let calculatorState = {
    first: null,
    second: null,
    operand: null,
    overwrite: false,
    calculate() {
        if (isNaN(this.first)) {
            this.first = null;
        }
        if (isNaN(this.second)) {
            this.second = null;
        }
        console.log("called calc with" + this.first + " " + this.operand + " " + this.second);
        if (this.first !== null && this.second !== null && this.operand !== null) {
            if (this.operand == "+") {
                this.first = this.first + this.second;
                this.postProcess();
            } else if (this.operand == "-") {
                this.first = this.first - this.second;
                this.postProcess();
            } else if (this.operand == "*") {
                this.first = this.first * this.second;
                this.postProcess();
            } else if (this.operand == "/") {
                if (this.second == 0) {
                    this.clear();
                    display.textContent = "funny man";
                    return;
                } else {
                this.first = this.first / this.second;
                }
                this.postProcess();
            } else if (this.operand == "=") {
                this.first =  parseFloat(display.textContent);
                this.second = null;
                this.operand = null;
            }
        } else if (this.first == null) {
            this.first = parseFloat(display.textContent);
        } else if (this.second == null) {
            this.second = parseFloat(display.textContent);
            this.calculate();
        }
    },
    clear() {
        this.first = null;
        this.second = null;
        this.operand = null;
        display.textContent = "";
    },
    postProcess() {
        this.second = null;
        this.operand = null;
        if (this.first > 999999999) {
            this.first = 999999999;
        } else if (this.first.toString().length > 9) {
            if (this.first.toString().includes(".")) {
                let divided = this.first.toString().split(".");
                let integer = divided[0];
                let maxLength = 9 - integer.length - 1;
                console.log(maxLength)
                this.first = Math.round(this.first * 10**maxLength) / 10 ** maxLength;
            }
        }
        display.textContent = this.first;
        
    }
}

function numberClick(event) {
    const n = event.target.textContent;
    console.log(n)
    if (calculatorState.overwrite) {
        calculatorState.overwrite = false;
        display.textContent = "";
    }
    if (n == "." && (display.textContent.includes("."))) return;
    if (display.textContent.length < 9) {
        display.textContent += n;
    }
}

function clear() {
    calculatorState.clear()
}

function calculate() {
    calculatorState.calculate()
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


function queueUp(event) {
    calculatorState.calculate();
    calculatorState.overwrite = true;
    let operand = event.target.textContent;
    calculatorState.operand = operand;
    console.log("state after calc:" + calculatorState.first + " " + calculatorState.operand + " " + calculatorState.second);
}


for (let btn of numberButtons) {
    btn.addEventListener('click', numberClick);
}

clearBtn.addEventListener('click', clear);
backBtn.addEventListener('click', back);
signBtn.addEventListener('click', sign);
smileBtn.addEventListener('click', smile);

plusBtn.addEventListener('click', queueUp)
minusBtn.addEventListener('click', queueUp)
mulBtn.addEventListener('click', queueUp)
divBtn.addEventListener('click', queueUp)
resBtn.addEventListener('click', queueUp)
