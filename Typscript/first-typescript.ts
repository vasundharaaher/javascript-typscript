const greeting: string = "hello, TypeScript!";
let count: number = 10;
let isActive : boolean = true;

console.log(count);
console.log(isActive);
console.log(greeting);



const numbers: number[] = [1,2,3,4,5,6];
let person: { name: string; age: number } = { name : "john" , age : 23};

console.log(numbers);
console.log(person);



function add(a: number, b: number) : number{
    return a + b;
}
let sum: number = add(5,10);
console.log(sum);



let username: string = "Alice";
let age: number = 25;
let isMember: boolean = true;

console.log(username);
console.log(age);
console.log(isMember);



let city = "new york";
let score = 100;
let isLoggedIn = false;

console.log(city);
console.log(score);
console.log(isLoggedIn);



interface User {
    name: string;
    age: number;
    isMember: boolean;
}
class Member implements User {
    name: string;
    age: number;
    isMember: boolean;

    constructor(name: string, age: number, isMember: boolean){
        this.name = name;
        this.age = age;
        this.isMember = isMember;
    }

    displayInfo(): void{
        console.log(`${this.name} is ${this.age} year old and  is ${this.isMember ? '' : 'not '} a number.`);
    }
}

const user1 = new Member("jenny", 20 ,true);
user1.displayInfo();