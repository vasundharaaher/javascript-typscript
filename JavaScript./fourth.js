console.log('String');

console.log('Example 1');
let firstname='Jenny'
let lastname = 'smith';
let fullname = firstname + '' + lastname;

console.log(fullname);

console.log('Example 2');
let greeting = `hello , ${firstname}!`;
console.log(greeting);

console.log('Example 3');
let msg = 'hello, javascript!';
console.log(msg.length);
console.log(msg.toUpperCase());
console.log(msg.slice(7,12));
'index no 7 to 11 skiped 12'


console.log('Example 4');
let text = 'Javascript is awesome!';
let index = text.indexOf('awesome');
console.log(index);
let index1 = text.indexOf('some');
console.log(index1);

console.log('Example 5');
let newText = text.replace('awesome','fantastic');
console.log(newText);



console.log("Booleans datatype");

let isjavascriptfun = true;
let isjavascripthard = false;

console.log(isjavascriptfun);
console.log(isjavascripthard);

console.log('Example : 1');
let a = 5;
let b = 10;
console.log(a<b);
console.log(a>b);

console.log('Example : 2');
let age = 20;
if(age >= 18){
    console.log('you are an aduld');
} else {
    console.log('you are a minor');
}