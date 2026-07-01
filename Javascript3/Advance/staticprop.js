class User {
    constructor(username){
        this.username =username
    }
    logMe(){
        console.log(`Username: ${this.username}`)       
    }
    static createId(){
        return `123`
    }
}
let hello = new User("vasu")
// console.log(hello.createId()) // will show error

class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email = email
    }
}
let eg = new Teacher("vasu", "vasu@gmail.com")
// console.log(eg.createId());  // will show error



