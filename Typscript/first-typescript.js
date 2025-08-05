var greeting = "hello, TypeScript!";
var count = 10;
var isActive = true;
console.log(count);
console.log(isActive);
console.log(greeting);
var numbers = [1, 2, 3, 4, 5, 6];
var person = { name: "john", age: 23 };
console.log(numbers);
console.log(person);
function add(a, b) {
    return a + b;
}
var sum = add(5, 10);
console.log(sum);
var username = "Alice";
var age = 25;
var isMember = true;
console.log(username);
console.log(age);
console.log(isMember);
var city = "new york";
var score = 100;
var isLoggedIn = false;
console.log(city);
console.log(score);
console.log(isLoggedIn);
var Member = /** @class */ (function () {
    function Member(name, age, isMember) {
        this.name = name;
        this.age = age;
        this.isMember = isMember;
    }
    Member.prototype.displayInfo = function () {
        console.log("".concat(this.name, " is ").concat(this.age, " year old and  is ").concat(this.isMember ? '' : 'not ', " a number."));
    };
    return Member;
}());
var user1 = new Member("jenny", 20, true);
user1.displayInfo();
