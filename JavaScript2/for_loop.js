

// for (let index = 0; index < 10; index++) {
    
//     if(index == 5){
//         console.log("5 is best number");               
//     }
//     console.log(index);     
// }


// for (let index = 1; index < 10; index++) {
//     const element = index
//     // console.log("Table of ",element); 
//     for (let j = 1; j < 11; j++) {
//         // console.log(index*j);       
//     }   
// }


// let array = ["hello" , "hey" , "hi"]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     // console.log(element);  
// }


// for (let index = 1; index < 10; index++) {
//     const element = index;
//     if((element % 3) == 0){
//         // console.log("(element % 3) == 0 detected ")
//         continue       
//     }
//     // console.log(element)
// }

// let arr = [1,2,3,4,5,6,7,8]
// for (const val of arr) {
//      console.log("Values is : ",val); 
// }


////////// Map ==============
// const map = new Map()
// map.set('IN','India')
// map.set('FR','France')
// map.set('USA','United state amarica')
// map.set('USA','United ')

// // console.log(map)
// for (const [key , value] of map) {
//     // console.log(key , " :- ", value);
    
// }


////////// for each ==========

array = [1,[2,3],[4,5],6]
// array.forEach(val => {
//      console.log(val)
    
// });

// array.forEach(function (val){
//     console.log(val + 2);
    
// })

// array.forEach((val) => {
//     console.log(val + 2);   
// })

///////////// for in ==============

// const object = {
//     js : 'javascript',
//     py : 'python',
//     rb : 'ruby'
// }
// for (const key in object) {  
//     const element = object[key];
//     console.log(key," :- ",element);  
// }


// array2 = [1,[2,3],[4,5],6]
// for (const key in array2) {
//     const element = array2[key];
//     console.log(element);
       
// }

////////////////////////////////

// array2 = [1,[2,3],[4,5],6]

// function printMe(item){
//     console.log(item);   
// }
// array2.forEach(printMe);

////////////////////////////////

// const myobj = [
//     {
//         len : 1,
//         name : "name 1"
//     },
//     {
//         len : 2,
//         name : "name 2"
//     },
//     {
//         len : 3,
//         name : "name 3"
//     },
//     {
//         len : 4,
//         name : "name 4"
//     }
// ]
// myobj.forEach((item) => {
//     console.log(item.len ," :- ",item.name);   
// });


//////////////============================

// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item) =>{
//     console.log(item)
//     return item
// })

// console.log(values)

//////////////============================

// const mynums = [1,2,3,4,5,6,7,8,9]
// // const newnums =  mynums.filter( (num) => num > 4)
// const newnums =  mynums.filter( (num) => {
//     return num > 4
// })
// console.log(newnums)

//////////////============================

// const newnum = []
// mynums.forEach((num) => {
//     if (num > 4){
//         newnum.push(num)
//     }
// })
// console.log(newnum);


//////////////============================