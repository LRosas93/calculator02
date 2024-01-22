// predefined colors in hex code
const orange = "#FF9500"
const white = "#D4D4D2"

const displayScreen = document.querySelector('.display');
const expHolder = document.querySelector('.numHolder');

const displayBtn = document.querySelectorAll('.displayBtn');
const negativeBtn = document.querySelector('.negativeBtn');
const operatorBtn = document.querySelectorAll('.operator');

// toggle variable
let buttonSelected = null;

// Event Listeners
displayBtn.forEach(button => {
    button.addEventListener('click', () => {
        addToDisplay(button);
    })
})

operatorBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (buttonSelected) {
            buttonSelected.style.backgroundColor = orange;
            buttonSelected.style.color = white;
        } 
        button.style.backgroundColor = white;
        button.style.color = orange;
        buttonSelected = button;
        addToExpression(displayScreen);
    })
})

function addToExpression(displayValue) {
    expHolder.value = displayValue.value;
    displayScreen.value = '';
}

function addToDisplay(button) {
    displayScreen.value += button.textContent;
}

function makeNegativeNumber() {
    displayScreen.value = `-${displayScreen.value}`
}

function makeDecimal(num) {
    switch (num.length) {

        case 1:
            displayScreen.value = `0.0${num}`;
            break;

        case 2:
            displayScreen.value = `0.${num}`
            break;
        
        default: 
            let numLength = num.length;
            let lastTwo = num.substring(numLength - 2, numLength);
            let firstHalf = num.substring(0, numLength - 2);
            displayScreen.value = `${firstHalf}.${lastTwo}`
    }
}

// screen clearing
function clearScreen() {
    displayScreen.value = '';
    expHolder.value = '';
    resetOperatorStyling();
}

function resetOperatorStyling() {
    buttonSelected.style.backgroundColor = orange;
    buttonSelected.style.color = white;
}
