const App = () => {
    const numberBtn = document.getElementsByClassName('operation-button');
    const operationBtn = document.getElementsByClassName('operation');
    const display = document.getElementById('display');
    const decimalBtn = document.querySelector('.decimal');
    const clearClear = document.getElementById('c');
    let currentNumber = 0;
    let newNumber = false;
    let operationChange = '';



    const numberPress = (number) => {
        if (newNumber) {
            display.value = number;
            newNumber = false;
        } else {
            if (display.value === '0') {
                display.value = number;
            } else {
                display.value += number;
            };
        };
    };
    const operation = (op) => {
        localOperaeration = display.value;
        if (newNumber && operationChange !== '=') {
            display.value = currentNumber;
        } else {
            newNumber = true;
            if (operationChange === '+') {
                currentNumber += parseFloat(localOperaeration);
            } else if (operationChange === '-') {
                currentNumber -= parseFloat(localOperaeration);
            } else if (operationChange === '*') {
                currentNumber *= parseFloat(localOperaeration);
            } else if (operationChange === '/') {
                currentNumber /= parseFloat(localOperaeration);
            } else {
                currentNumber = parseFloat(localOperaeration);
            };
            display.value = currentNumber;
            operationChange = op;
        };
    };
    const decimal = () => {
        localDecimal = display.value;
        if (newNumber) {
            localDecimal = '0.'
            newNumber = false;
        } else {
            if (localDecimal.indexOf('.') === -1) {
                localDecimal += '.'
            };
        };
        display.value = localDecimal
    };

    for (i = 0; i < numberBtn.length; i++) {
        let number = numberBtn[i];
        number.addEventListener('click', (e) => {
            numberPress(e.target.textContent);
        });
    };
    for (i = 0; i < operationBtn.length; i++) {
        let operationsBtn = operationBtn[i];
        operationsBtn.addEventListener('click', (e) => {
            operation(e.target.textContent);
        });
    };

    clearClear.addEventListener('click', () => {
        display.value = '0';
    })
    decimalBtn.addEventListener('click', decimal);
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 48) { 
            if (newNumber) {
                display.value = 0;
                newNumber = false;
            } else {
                if (display.value === '0') {
                    display.value = 0;
                } else {
                    display.value += 0;
                };
            };
        }
        if (e.keyCode == 49) {
            if (newNumber) {
                display.value = 1;
                newNumber = false;
            } else {
                if (display.value === '0') {
                    display.value = 1;
                } else {
                    display.value += 1;
                };
            };
        }
        if (e.keyCode == 50) {
            if (newNumber) {
                display.value = 2;
                newNumber = false;
            } else {
                if (display.value === '0') {
                    display.value = 2;
                } else {
                    display.value += 2;
                };
            };
        }
        if (e.keyCode == 51) {
            if (newNumber) {
                display.value = 3;
                newNumber = false;
            } else {
                if (display.value === '0') {
                    display.value = 3;
                } else {
                    display.value += 3;
                };
            };
        }
        if (e.keyCode == 52) {
            if (newNumber) {
                display.value = 4;
                newNumber = false;
            } else {
                if (display.value === '0') {
                    display.value = 4;
                } else {
                    display.value += 4;
                };
            };
        }
        if (e.keyCode == 53) {
            if (newNumber) {
                display.value = 5;
                newNumber = false;
            } else {
                if (display.value === '0') {
                    display.value = 5;
                } else {
                    display.value += 5;
                };
            };
        }
        if (e.keyCode == 54) {
            if (newNumber) {
                display.value = 6;
                newNumber = false;
            } else {
                if (display.value === '0') {
                    display.value = 6;
                } else {
                    display.value += 6;
                };
            };
        }
        if (e.keyCode == 55) {
            if (newNumber) {
                display.value = 7;
                newNumber = false;
            } else {
                if (display.value === '0') {
                    display.value = 7;
                } else {
                    display.value += 7;
                };
            };
        }
        if (e.keyCode == 56) {
            if (newNumber) {
                display.value = 8;
                newNumber = false;
            } else {
                if (display.value === '0') {
                    display.value = 8;
                } else {
                    display.value += 8;
                };
            };
        }
        if (e.keyCode == 57) {
            if (newNumber) {
                display.value = 9;
                newNumber = false;
            } else {
                if (display.value === '0') {
                    display.value = 9;
                } else {
                    display.value += 9;
                };
            };
        }
    })
    


}
document.addEventListener('DOMContentLoaded', App)