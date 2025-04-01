// Project: Simple Calculator
function calculator(num1, operator, num2) {
    switch(operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return "Invalid operator";
    }
}

console.log("5 + 3 =", calculator(5, '+', 3));
console.log("10 / 2 =", calculator(10, '/', 2));