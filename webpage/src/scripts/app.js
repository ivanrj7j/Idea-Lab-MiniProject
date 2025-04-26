// This file contains the JavaScript logic for the number system converter application.

const inputField = document.getElementById('inputNumber');
const baseFromSelect = document.getElementById('baseFrom');
const baseToSelect = document.getElementById('baseTo');
const outputArea = document.getElementById('output');

function convertNumber() {
    const inputValue = inputField.value;
    const baseFrom = parseInt(baseFromSelect.value);
    const baseTo = parseInt(baseToSelect.value);

    if (!isValidInput(inputValue, baseFrom)) {
        outputArea.innerText = 'Invalid input';
        return;
    }

    const decimalValue = parseInt(inputValue, baseFrom);
    const convertedValue = decimalValue.toString(baseTo).toUpperCase();
    outputArea.innerText = convertedValue;
}

function isValidInput(value, base) {
    const regex = {
        2: /^[0-1]+$/,
        8: /^[0-7]+$/,
        10: /^[0-9]+$/,
        16: /^[0-9A-Fa-f]+$/
    };
    return regex[base].test(value);
}

inputField.addEventListener('input', convertNumber);
baseFromSelect.addEventListener('change', convertNumber);
baseToSelect.addEventListener('change', convertNumber);