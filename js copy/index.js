const question = prompt('What do you want yo do?')
const firstNumber = prompt('Your first number')
const secondNumber = prompt('Your second number')

function sum(a,b) {
    return Number(a) + Number(b)
}
 if (question === 'sum') console.log(`${firstNumber} + ${secondNumber} = ${sum(firstNumber, secondNumber)}`);


function mult(a,b) {
    return a * b
}

if (question === 'mult') console.log(`${firstNumber} * ${secondNumber} = ${mult(firstNumber, secondNumber)}`);

function sub(a,b) {
    return a - b
}

if (question === 'sub') console.log(`${firstNumber} - ${secondNumber} = ${sub(firstNumber, secondNumber)}`);

function div(a,b) {
    return a / b
}

if (question === 'div') console.log(`${firstNumber} / ${secondNumber} = ${div(firstNumber, secondNumber)}`);