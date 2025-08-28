// Variables
let number1 = "";
let number2 = "";
let operator = "";
let expression = "";
let numAndOperator = [];
let currentNumber = "";

// Nodes/NodeLists for the DOM
const buttons = document.querySelectorAll(".button");
const screenTop = document.querySelector(".screen-top");
const screenBottom = document.querySelector(".screen-bottom");
const numberButtons = document.querySelectorAll(".number-button")
const operatorButtons = document.querySelectorAll(".operator-button");


function updateTopDisplay() {
    screenTop.innerText = expression;
}

// Called when the user presses any of the number ubttons
function appendNumber() {
    // Add an event listener to each number button
    numberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Adds the number button's value to the current number string
            const value = button.innerText;
            currentNumber += value;
            expression += value;
            screenTop.innerText = expression;
        });
    });
}

// Called when the user presses any of the operator buttons
function operatorInput() {
    //Add an event listener to each number button
    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener("click", () => {
            // Push the current number onto the array
            numAndOperator.push(currentNumber);
            operator = button.innerText;
            expression += operatorValue;

            //Push the operator onto the array
            numAndOperator.push(operator);

            //Modify the text displayed by the calculator
            screenTop.innerText = expression;
        });
    });
}

// Called when the user presses the "=" button
function calculate() {

    //If the first and last element in the array are numbers, assign them to number1 and number2
    if(numAndOperator[0].isInteger()) {
        number1 = parseInt(numAndOperator[0]);
    }

    if(numAndOperator[2].isInteger()) {
        number2 = parseInt(numAndOperator[numAndOperator.length - 1]);
    }


}


// clears all of the numbers, expressions and empties out the screen display.
function clear() {
    // Reset all of the variables and all of the calculator text.
    number1 = "";
    number2 = "";
    operator = "";
    expression = "";
    screenTop.innerText = "";
    screenBottom.innerText = "";
    numAndOperator = [];
}

// event listener for the button click
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if(value === "AC") {
            clear();
        }

        switch(value) {
            case "+":
                operator += "+";
                break;
            case "-":
                operator += "-";
                break;
            case "*":
                operator += "*";
                break;
            case "/":
                operator += "/";
                break;
        }

    });
})

function add(num1, num2) {
    console.log("debug: " + num1 + " + " + num2);
    return num1 + num2;
}

function subtract(num1, num2) {
    console.log("debug: " + num1 + " - " + num2);
    return num1 - num2;
}


function multiply(num1, num2) {
    console.log("debug: " + num1 + " * " + num2);
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 == 0) {
        console.log("Division by 0.")
        return;
    }
    console.log("debug: " + num1 + " / " + num2);
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if(operator === "+") {
        return add(num1, num2);
    }

    else if(operator === "-") {
        return subtract(num1, num2);
    }

    else if (operator === "*") {
        return multiply(num1, num2);
    }

    else if (operator === "/") {
        return divide(num1, num2);
    }
}
