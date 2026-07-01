////////////////////////// Inheritance 

// const User = {
//     isnamed : true
// }

// const Tech = {
//     isnamed : true
// }
// const TASupport = {
//     isAvailable: false
// }
// const TeachingSupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TASupport
// }

// Tech.__proto__= User


class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username , email , password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)       
    }
}

const hello = new Teacher("vasu","hello@gmail.com","123")
hello.addCourse()
hello.logMe()

const hello2 = new User("vasu","hello@gmail.com","123")
// hello2.addCourse()      // show error
hello2.logMe()

console.log( hello === Teacher);
console.log( hello instanceof Teacher);
console.log( hello instanceof User);