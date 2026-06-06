/*
var a = 10
let b = 20
const c = 30

console.log("Before block ")
console.log("Var ",a)
console.log("Let ",b)
console.log("Const ",c)

if(true){
    var a = 400
    let b = 500
    const d = 600
    console.log("Block start ")
    console.log("Var ",a)
    console.log("Let ",b)
    console.log("Const ",c)
    console.log("Const ",d)
    console.log("Block end ")
}

console.log("After block ")
console.log("Var ",a)
console.log("Let ",b)
console.log("Const ",c)
// console.log("Const ",d)  

*/

////////////////////////////////////////

function one(){
    const usernm = "Vasu"
    function two(){
        const website = "youtuble"
        console.log(usernm);
        
    }
    // console.log(website);

    two()
    
}
// one()


if(true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = " youtuble"
        // console.log(username + website)       
    }
    // console.log(website);    
}
// console.log(username);



// ????????????????????????????????????  Interesting

// concept of Hoisting ( function can be call before it's defination )
addone(5)
// function 
function addone(num){
    return num + 1
}

// in this case hoisting not happend
addtwo(5)
const addtwo = function addtwofn(num){
    return num + 2
}


