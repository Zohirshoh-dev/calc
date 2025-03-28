let display = document.getElementById("display");
let currentInput = "";
let operator = null;
let previousInput = "";

function appendNumber(num) {
    if (currentInput === "0" && num !== ".") {
        currentInput = "";
    }
    currentInput += num;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}


function calculateResult() {
    if (previousInput === "" || currentInput === "") return;
    let result;
    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            result = prev / curr;
            break;
        case "%":
            result = prev % curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = "";
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = null;
    updateDisplay();
}

function toggleSign() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}

function updateDisplay() {
    display.textContent = currentInput || "0";
}
