// ES6

// class User {
//     constructor(username , email , password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abd`
//     }
//     prusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// let eg = new User("eg" , "eg@gmail.com" , "123")

// console.log(eg.encryptPassword());
// console.log(eg.prusername());



///// behind the scene

function User(username , email , password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptpassword = function(){
    return `${this.password}abd`
}

User.prototype.prusername = function(){
    return `${this.username.toUpperCase()}`
}
let eg2 = new User("Tea", "tea@gmail.com" , "123")
console.log(eg2.encryptpassword())
console.log(eg2.prusername());


