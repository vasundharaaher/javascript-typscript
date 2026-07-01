// let myNm = "hitesh"

// console.log(myNm.length);


// let myHeros = ["thor" , "spiderman"]

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",
//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
        
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`)
    
// }

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
    
// }

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh() // will show error



////////////////////////// Inheritance 

const User = {
    isnamed : true
}

const Tech = {
    isnamed : true
}
const TASupport = {
    isAvailable: false
}
const TeachingSupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TASupport
}

Tech.__proto__= User

// moden syntax
Object.setPrototypeOf(TeachingSupport , Tech)



let anotherUsername = "ChaiAurCode    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(`True length is : ${this.trim().length}`);
    
}
anotherUsername.trueLength()