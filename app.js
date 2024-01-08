const buttons = document.querySelectorAll('button');
const outputValue = document.querySelector('.output-display');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'AC') {
            clearDisplay();
        } else if (button.textContent ==='=') {
            try {
                clearDisplay.value = eval(outputValue.value);
            } catch (error) {
                outputValue.value = 'Error';
            }
        } else {
            outputValue.value += button.textContent;
        }
});
});

function clearDisplay() {
    outputValue.display = '';
}