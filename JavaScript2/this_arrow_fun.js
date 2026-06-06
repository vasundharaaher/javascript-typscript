// this current context

// const user = {
//     usernm : "vasu",
//     price : 220,
//     welcomeMessage(){
//         console.log(`${this.usernm} , welcome to website `); 
//         console.log(this);
               
//     }
// }
// user.welcomeMessage()
// user.usernm = "sam"
// user.welcomeMessage()

// console.log(this);

//////////////////////////////////////===========
// function globle object 

// function chai(){
//     let usnm = "ABSD"
//     console.log(this.usnm); 
//      console.log(this);  

// }
// chai()

// const chai = function chaifn(){
//     let usnm = "ABSD"
//     console.log(this.usnm);  
//     console.log(this);  
// }
// chai()

//////////////////////////////////////=========== Arrow functions

// const chai =  () => {
//     let usnm = "ABSD"
//     console.log(this); 
//     console.log(this);  
// }
// chai()

// const addTwo = (num , num1) => {
//     return num + num1
// }

// const addTwo = (num , num1) => num + num1

// const addTwo = (num , num1) => (num + num1)

// console.log(addTwo(9 , 8))

////////////////////////////===================

// Immediatelly invoked function expression (IIFE)

(function chai(){
    console.log(`DB CONNECTION`);
    
})();

(
    (name) => {
         console.log(`DB CONNECTION TWO ${name}`);
    }
)('vasu')
