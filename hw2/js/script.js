alert ("Hi!");

const firstNumber = prompt("Введите первое число", "");
const secondNumber = prompt("Введите второе число", "");

const sumResult = +firstNumber + +secondNumber;
const diffResult = firstNumber - secondNumber;
const multResult = firstNumber * secondNumber;
const divResult = firstNumber / secondNumber;

alert(`Calculations are finished!
Sum: ${firstNumber} + ${secondNumber} = ${sumResult}
Diff: ${firstNumber} - ${secondNumber} = ${diffResult}
Mult: ${firstNumber} * ${secondNumber} = ${multResult}
Div: ${firstNumber} / ${secondNumber} = ${divResult}`);