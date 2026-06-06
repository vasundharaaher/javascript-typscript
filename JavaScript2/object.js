
// const myUser = Symbol("key1")

// const Jsuser = {
//     name: "hello",
//     "full name":"vasu aher",
//     [myUser]: "Vasundhara",
//     age: 24,
//     email: "vasu@gmail.com",
//     location: "Chh. sambhajinagar",
//     isLoggedin: false,
//     lastLogin : ["Monday","Saturday"],
   
// }

// console.log(Jsuser.name)

// console.log(Jsuser["email"])

// console.log(Jsuser["full name"])

// console.log(Jsuser[myUser])

// Jsuser.name = "New vasu"

// Object.freeze(Jsuser)

// Jsuser.name = "New hello"

// console.log(Jsuser);

// Jsuser.greeting = function(){
//     console.log("Hello from function")
// }
// Jsuser.greetingtwo = function(){
//     console.log(`Hello from function, user ${this.name}`)
// }
// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingtwo());


// ++++++++++++++++++++++++++++++++++++++++++++

// const tinderUser = new Object()  // single turn obj
const tinderUser ={  // non single turn obj
    id : 1,
    username : {
        fullname : {
            firstnm : "Vasundhara",
            lastnm:"Aher"
        }
    },
    email : "vasu@gmail.com",
    isLogging : false
}
// console.log(tinderUser)

const Jsuser = {
    name: "hello",
    "full name":"vasu aher",
    age: 24,
    email: "vasu@gmail.com",
    location: "Chh. sambhajinagar",
    isLoggedin: false,
    lastLogin : ["Monday","Saturday"],
   
}
// const combine = {tinderUser,Jsuser}
// const combine = Object.assign({} , tinderUser, Jsuser)
const combine = {...tinderUser,...Jsuser}

// console.log(combine);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogging'));
// console.log(tinderUser.hasOwnProperty('isLogg'));


///////////////////////////////////////

const user = [
    {
    name: "hello1",
    "full name":"vasu aher"
    },
    {
    name: "hello2",
    "full name":"vasu aher"
    },
    {
    name: "hello3",
    "full name":"vasu aher"
    }
]
// console.log(user[0].name);
// console.log(user[0]["full name"]);


/////////////////////////////////////////////////

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "sir"
}
// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: Instructor} = course
console.log(Instructor);
