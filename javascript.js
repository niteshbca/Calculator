let display = document.getElementById("display");
let expression = "";

function appendToDisplay(value) {
    expression += value;
    display.innerHTML = expression;
}

function clearDisplay() {
    expression = "";
    display.innerHTML = "0"; 
}

function calculateResult() {
    try {
        const result = eval(expression);
        expression = result.toString();
        display.innerHTML = result;
    } catch (error) {
        display.innerHTML = "Error";
    }
}
