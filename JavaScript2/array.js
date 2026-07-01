// let arr = new Array(1,2,3,4,5,6,7)


// arr.push(8)
// console.log(arr)
// arr.pop()
// console.log(arr)

// arr.unshift(23)
// console.log(arr)

// arr.shift()
// console.log(arr)


// console.log(arr.includes(4))
// console.log(arr.indexOf(4))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(`Original Array ${arr}`)

// const new1 = arr.slice(1,3)

// console.log(`After Slice ${new1}`)

// console.log(`Original array after Slice `,arr)

// const new2 = arr.splice(1,3)

// console.log(`After Splice Array`,new2)

// console.log(`Original array after Splice `,arr)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++


// let arr = new Array("h","e","l","l","o")

// let arr2 = new Array("w","o","r","l","d")

// arr.push(arr2)

// newarr = arr.concat(arr2)

// console.log(newarr);

// console.log([...arr,...arr2]);


// let arr = [1,2,[3,4],[5,[6,7]],8]
// anotherarr = arr.flat(Infinity)
// console.log(anotherarr);


//////+++++++++++++++++++++++++++++++++++++

console.log(Array.isArray("Hello"))
console.log(
    Array.from("Hello")
);
console.log(
    Array.from({name:"Hello"})
);

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
