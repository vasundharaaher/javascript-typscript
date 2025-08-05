class calculator {
    add(a: number, b:number): number{
        return a + b;
    }
    subtraction(a: number, b:number): number{
        return a - b;
    }
    multiply(a: number, b:number): number{
        return a * b;
    }
    divide(a: number, b:number): number{
        if (b===0){
            throw new Error("Cannot divide by Zero");
        }
        return a / b;
    }
}

const Calculator = new calculator();
console.log("Addition: ", Calculator.add(10,5));
console.log("Substraction: ", Calculator.subtraction(10,5));
console.log("Multiplication: ", Calculator.multiply(10,5));
console.log("Division: ", Calculator.divide(10,5));