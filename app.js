const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const operatorButtons = document.querySelectorAll('.operator');
let opButtons = [];
// factory function to create buttons
function createButtons() {
    function createButton(button) {
        return {
            value: button.value,
            active: false
        }
    }

    for (let i = 0; i < operatorButtons.length; i++) {
        let btn = createButton(operatorButtons[i]);
        opButtons.push(btn);
    }
}

const operatorList = {
    '*': 'multiply',
    '+': 'addition',
    '-': 'subtraction',
    '/': 'division'
}

createButtons();

buttons.forEach(button => {
    button.addEventListener('click', () => {

        if (button.textContent === 'AC') {
            clearScreen();
        }
        // evaluates the expression
        if (button.textContent === '=') {
            try {
                evaluateExpression();
            } catch(error) {
                alert("Error: " + error);
            }
        } else if (button.value in operatorList) {
            toggleActive(button);
            }
        else {
            addToDisplay(button);
        }
        }
    )
});

function clearScreen() {
    display.textContent = '';
}

function evaluateExpression() {
    const expression = eval(display.textContent);
    display.textContent = expression;
}

function addToDisplay(btn) {
    display.textContent += btn.value;
    display.value += btn.value;
}

// operator buttons
function toggleActive(btn) {
    if (!(btn.classList.contains('operatorActive'))) {
        btn.classList.toggle('operatorActive');
    } else {
        btn.classList.remove('operatorActive');
    }
}