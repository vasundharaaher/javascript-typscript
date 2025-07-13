function greet(name){
    return 'hello , '+ name + '!';

}
let message = greet('Alice');
console.log(message);



const add = function(a,b){
    return a+b;
};
console.log(add(8,5));



const multiply = (a,b)=> a+b;
console.log(multiply(4,5));


let globalVar = 'I am Golobal';
function checkScope(){
    let localvar = 'l am local'
    console.log(globalVar);
    console.log(localvar);
}
checkScope();
console.log(globalVar);
console.log(localvar);

