
function clear_screen() {
    document.getElementById('result').value = ""
}

function display(num) {
    const operator = ["*", "/", "+", "-", "."];
    const inputValue = document.getElementById('result').value;
    if (operator.includes(num) && inputValue == "" ||
        operator.includes(num) && operator.includes(inputValue.slice(-1))) {
        return;
    }
    document.getElementById('result').value += num;
}

function calculate() {
    const input = document.getElementById('result').value;
    const output = eval(input);
    document.getElementById('result').value = output
}