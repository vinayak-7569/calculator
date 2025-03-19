 // script.js
let historyVisible = false;

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value) || '';
        addToHistory(display.value, result);
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}

function addToHistory(expression, result) {
    const historyList = document.getElementById('history-list');
    const historyItem = document.createElement('li');
    historyItem.textContent = `${expression} = ${result}`;
    historyList.appendChild(historyItem);
}

function toggleHistory() {
    const history = document.getElementById('history');
    historyVisible = !historyVisible;
    history.style.display = historyVisible ? 'block' : 'none';
}
