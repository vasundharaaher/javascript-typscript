
console.log('Array');
let fruits = ['apple' , 'banana' , 'cherry'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits.push('Mango');
console.log(fruits);

fruits.pop();
console.log(fruits);

let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

console.log("Object");

let person = {
    name:'Noman',
    age:30,
    isStudent: true
};
console.log(person.name);
console.log(person['name']);

console.log(person.age);
console.log(person['age']);

console.log(person.isStudent);
console.log(person['isStudent']);
