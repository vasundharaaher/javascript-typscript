// class User {
//     constructor (email , password){
//         this.email = email
//         this.password = password
//     }
//     get email(){
//         return this.email2.toUpperCase()
//     }
//     set email(value){
//         this.email2 = value
//     }
//     get password(){
//         return `${this.password2} hello`
//     }
//     set password(value){
//         this.password2 = value
//     }
// }
// const eg = new User("vasu@gmail.com" , "123")
// console.log(eg.password2)
// console.log(eg.password)

// console.log(eg.email2)
// console.log(eg.email)


///''''''''''''''''''''//////////
// Properti base get set

// function User(email, password){
//     this._email = email
//     this._password = password

//     Object.defineProperty(this , 'email' , {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             return this.email = value
//         }
//     })
//     Object.defineProperty(this , 'password' , {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             return this._password = value
//         }
//     })
// }

// const eg = new User("hellogmail.com","123")
// console.log(eg.email);


///''''''''''''''''''''//////////
// Object base get set

const User = {
    _email: 'h@gmail.com',
    _password: 'abcd',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const hello = Object.create(User)
console.log(hello.email)
