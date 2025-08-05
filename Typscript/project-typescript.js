var calculator = /** @class */ (function () {
    function calculator() {
    }
    calculator.prototype.add = function (a, b) {
        return a + b;
    };
    calculator.prototype.subtraction = function (a, b) {
        return a - b;
    };
    calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by Zero");
        }
        return a / b;
    };
    return calculator;
}());
var Calculator = new calculator();
console.log("Addition: ", Calculator.add(10, 5));
console.log("Substraction: ", Calculator.subtraction(10, 5));
console.log("Multiplication: ", Calculator.multiply(10, 5));
console.log("Division: ", Calculator.divide(10, 5));
