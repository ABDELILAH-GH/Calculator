const display = document.querySelector('.display'); 

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value); 
    } catch {
        display.value = "Error!"; 
    }
}
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}