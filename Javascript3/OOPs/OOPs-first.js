// javascript and classes
// OOPs
// Object
// - collection of properties and methods
// - toLowerCase


// Part of OOp
// - Constructor 
// - functionPrototypes
// - Classes
// - Instances (new, this)

// // 4 Pillars
// Abstraction 
// Encapsulation
// Inheritance
// Polymorphism

// const user = {
//     username: "hitesh",
//     logincount: 8,
//     signedin: true,

//     getUserDetails: function(){
//         console.log("Got user details from datebase");
        
//     }
// }
// console.log(user.logincount);
// console.log(user.getUserDetails());

// console.log(this);

function User(username , logincount , isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;

    this.greeting = function(){
        return `Welcome ${this.username}`
    }

    return this
}
const userOne = new User("Hello", 1 , 1)
const userTwo = new User("Vasu", 10 , 0)

// console.log(userOne);
console.log(userOne.constructor());

