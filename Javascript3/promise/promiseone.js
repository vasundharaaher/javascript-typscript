// const promiseOne = new Promise(function(resolve , reject){
//     // Do an async task
//     // DB calls , cryptography , network
//     setTimeout(function(){
//         console.log('Async task is compelete')
//         resolve()      
//     }, 1000)
    
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
    
// })

// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("Async task is completed ");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Promise consumed");    
// })



// const promisethree = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("Async task is completed ");
//         resolve({username:"chai",email:"hello@gmail.com"})
//     }, 1000)
// })
// promisethree.then(function(user){
//     console.log("Promise consumed"); 
//     console.log(user);
       
// })


// const promiseFour = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = false 
//         if (!error){
//             resolve({username: "vasu", password: "123"})
//         } else{
//             reject("ERROR : Somthing went wrong")
//         }
//     }, 1000)
// })
// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username); 
// }).catch(function(error){
//     console.log(error);   
// }).finally(()=> 
//     console.log("The promise is either resolve or rejected")
// )



// const promiseFive = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = true 
//         if (!error){
//             resolve({username: "vasu", password: "123"})
//         } else{
//             reject("ERROR : Somthing went wrong")
//         }
//     }, 1000)
// })
// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch(error){
//         console.log(error)
//     }   
// }
// consumePromiseFive()



// async function getalluser() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
        
//     } catch(error){
//         console.log("E : ", error);
//     }
// }
// getalluser()




fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();  
})
.then((data) => {
    console.log(data);  
})
.catch((error) => {
    console.log(error); 
})