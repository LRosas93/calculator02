const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const operatorButtons = document.querySelectorAll('.operator');


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
        }
        else {
            addToDisplay(button);
        }
        }
    )
});

function clearScreen() {
    display.value = '';
}

function evaluateExpression() {
    const result = eval(display.value);
    display.value = result;
}

function addToDisplay(btn) {
    display.value += btn.value;
}

// operator buttons
function toggleActive(btn) {
    btn.classList.toggle('operatorActive');
}