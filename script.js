// Jai Shree Ram

// usage of taking outcome

dhokebaaz.getOutcome()

// store that thing in variable

let outcome = dhokebaaz.getOutcome()

// whenever you call that fucntion n your js you will get (i.e 2 false  value and 3 true values in your 5 consectives function calls) 

// e.g

for (let i = 0; i < 5 ;i++) {

    console.log(dhokebaaz.getOutcome());
    // we will get 2 false and 3 true every time you call (in backside it is taking 5 cases , just to know.)
}


// hope u complete this calculator with functionality and BEREHMII 

// Arpit -_-

let currentInput = "0";
let previousInput = "0";
let operation = null;
let resetInput = false;
let calculationString = "";

const display = document.getElementById("display");
const calculation = document.getElementById("calculation");

// Updating the display
function updateDisplay() {
    display.textContent = currentInput;
    calculation.textContent = calculationString || "0";
}


function inputDigit(digit) {
    if (resetInput) {
        currentInput = digit;
        resetInput = false;
    }
    else {
        currentInput = currentInput === "0" ? digit : currentInput + digit;
    }
    updateDisplay();
}

function inputDecimal() {
    if (resetInput) {
        currentInput = "0.";
        resetInput = false;
    }
    else if (currentInput.indexOf(".") === -1) {
        currentInput += ".";
    }
    updateDisplay();
}

function handleOperator(nextOperator) {
    const inputValue = parseFloat(currentInput);

    if (operator && !resetInput) {
        calculate();
    }
    else if (!resetInput) {
        previousInput = currentInput;
    }
    
    resetInput = true;
    operation = nextOperator;

    switch(nextOperator) {
        case "+":
            calculationString = previousInput + " + ";
            break;
        case "-":   
            calculationString = previousInput + " - ";
            break;
        case "*":
            calculationString = previousInput + " * ";
            break;
        case "/":
            calculationString = previousInput + " / ";
            break; 
    }

    updateDisplay();
}

// Final result calculation
function calculate() {
    const previousValue = parseFloat(previousInput);
    const currentValue = parseFloat(currentInput);

    if (isNaN (previousValue) || isNaN(currentValue)) {
        return;
    }

    let result;

    switch (operation) {
        case "+":
            result = previousValue + currentValue;
            calculationString = "${previousValue} + ${currentValue}";
            break;
        case "-":
            result = previousValue - currentValue;
            calculationString = "${previousValue} - ${currentValue}";
            break;
        case "*":
            result = previousValue * currentValue;
            calculationString = "${previousValue} * ${currentValue}";
            break;
        case "/":
            result = previousValue / currentValue;
            calculationString = "${previousValue} / ${currentValue}";
            break;
        default:
            return;
    }

    currentInput = result.toString();
    if (currentInput.length > 12) {
        currentInput = parseFloat(currentInput).toExponential(8);
    }

    operation = null;
    resetInput = true;
    previousInput = currentInput;
    updateDisplay();
}

// Clearing the calculator 
function resetCalculator() {
    currentInput = "0";
    previousInput = "0";
    operation = null;
    resetInput = false;
    calculationString = "";
    updateDisplay();
}

// Calculate the percentage
function calculatePercentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

// Event listeners for No. btns
document.getElementById("zero").addEventListener("click", () => inputDigit("0"));
document.getElementById("one").addEventListener("click", () => inputDigit("1"));
document.getElementById("two").addEventListener("click", () => inputDigit("2"));
document.getElementById("three").addEventListener("click", () => inputDigit("3"));
document.getElementById("four").addEventListener("click", () => inputDigit("4"));
document.getElementById("five").addEventListener("click", () => inputDigit("5"));
document.getElementById("six").addEventListener("click", () => inputDigit("6"));
document.getElementById("seven").addEventListener("click", () => inputDigit("7"));
document.getElementById("eight").addEventListener("click", () => inputDigit("8"));
document.getElementById("nine").addEventListener("click", () => inputDigit("9"));

// Event listeners for operator btns
document.getElementById("add").addEventListener("click", () => handleOperator("+"));
document.getElementById("subtract").addEventListener("click", () => handleOperator("-"));
document.getElementById("multiply").addEventListener("click", () => handleOperator("*"));
document.getElementById("divide").addEventListener("click", () => handleOperator("/"));
document.getElementById("equals").addEventListener("click", calculate);


// Event listeners for other btns
document.getElementById("clear").addEventListener("click", resetCalculator);
document.getElementById("decimal").addEventListener("click", inputDecimal);
document.getElementById("percent").addEventListener("click", calculatePercentage);


document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (/^[0-9]$/.test(key)) {
        event.preventDefault();
        inputDigit(key);
    }

    switch (key) {
        case "+":
            event.preventDefault();
            handleOperator("+");
            break;
        case "-":
            event.preventDefault();
            handleOperator("-");
            break;
        case "*":
            event.preventDefault();
            handleOperator("*");
            break;
        case "/":
            event.preventDefault();
            handleOperator("/");
            break;
        case ".":
        case ",":
            event.preventDefault();
            inputDecimal();
            break;
        case "Enter":
        case "=":
            event.preventDefault();
            calculate();
            break;
        case "Escape":
            event.preventDefault();
            resetCalculator();
            break;
        case "Backspace":
            event.preventDefault();
            if (currentInput.length > 1) {
                currentInput = currentInput.slice(0, -1);
            }
            else {
                currentInput = "0";
            }
            updateDisplay();
            break;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    updateDisplay();
});