alert("Давайте начнём!");

const action = prompt("Какое действие?");
const number = +prompt("Введите число");

if ( action === "sin", action === "cos" ) {
    if ( action === "sin" ) {
        alert(Math.sin(number));
    }
    else if ( action === "cos" ) {
        alert(Math.cos(number));
    }
}

else {
    if (action === "pow") {
        secondNumber = +prompt("Показатель?");
        }
        else {
        secondNumber = +prompt("Введите число");
        }
    if ( action === "pow" ) {
        alert(Math.pow(number, secondNumber));
    }
    else if ( action === "+" ) {
        alert(number + secondNumber);
    } 
    else if ( action === "-" ) {
        alert(number - secondNumber);
    } 
    else if ( action === "*" ) {
        alert(number * secondNumber);
    }
    else if ( action === "/" ) {
        alert(number / secondNumber);
    }
}