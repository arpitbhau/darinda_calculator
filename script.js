// Jai Shree Ram

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

    if (operation && !resetInput) {
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
            calculationString = `${previousValue} + ${currentValue}`;
            break;
        case "-":
            result = previousValue - currentValue;
            calculationString = `${previousValue} - ${currentValue}`;
            break;
        case "*":
            result = previousValue * currentValue;
            calculationString = `${previousValue} * ${currentValue}`;
            break;
        case "/":
            result = previousValue / currentValue;
            calculationString = `${previousValue} / ${currentValue}`;
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

function select(identifier) {
    return document.querySelector(identifier)
}

// event listener for all

select(".calcBtns")
.addEventListener("click" , e => {
    
    let target = e.target.id

    if ( !(isNaN(+target) )) inputDigit(target)

    else if (isNaN(+target) && target.length === 1) handleOperator(target)

    
    switch (target) {

        // TODO: make dhokebaaz functionality of calculator as a function and then call that function instead of that console.log()

        case "equals": dhokebaaz.getOutcome() ? calculate() : console.log("Bhai galat calc vala function bana"); break
        
        case "percent": dhokebaaz.getOutcome() ? calculatePercentage() : console.log("Bhai galat calc vala function bana")

        case "clear": resetCalculator(); break
        case "decimal": inputDecimal(); break
        
    }

})



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