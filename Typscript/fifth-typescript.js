function identity(value) {
    return value;
}
console.log(identity("hello, typescript!"));
console.log(identity(42));
var Box = /** @class */ (function () {
    function Box(value) {
        this.contents = value;
    }
    Box.prototype.getConstructor = function () {
        return this.contents;
    };
    return Box;
}());
var stringBox = new Box("Typescript");
var numberBox = new Box(20);
console.log(stringBox.getConstructor());
console.log(numberBox.getConstructor());
