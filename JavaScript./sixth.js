console.log('JSON format')
let jsonObject={
    name:'vasu aher',
    age:30,
    isstudent: false,
    skills: ['javascript','react','node.js']
};

let jsonString = JSON.stringify(jsonObject);

console.log(jsonString);

console.log('regular expration');
console.log('Example 1: ');
let pattern = /hello/;
let text = 'hello world';
console.log(pattern.test(text));

console.log('Example 2: ');
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,}$/;
let email = "example@example.com";

console.log(emailPattern.test(email));

console.log(pattern.test(email));


console.log('Example 3');
let stetment = "the price is 100 dollers and 50 cents";

let numberPattern = /\d+/g;

let numbers = stetment.match(numberPattern);

console.log(numbers);
