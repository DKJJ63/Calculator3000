let displayValue = '';

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function appendChar(char) {
    displayValue += char;
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result;
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.querySelector('.display').value = displayValue;
}
