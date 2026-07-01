// const salary = 400987.987541
// const balance = new Number(400)

// conver number in to string

// const strbalance = balance.toString()
// console.log(strbalance)
// console.log(typeof strbalance)

// console.log(strbalance.length)

// // fixing value 
// console.log(salary.toFixed(2))

// shortning the value acc precision
// console.log(salary.toPrecision(6))

// console.log(salary.toLocaleString('en-IN'))

/// ++++++++++ Math ++++++++++++++++

// console.log(typeof Math)
// console.log(Math.abs(-3))
// console.log(Math.round(3.6))
// console.log(Math.ceil(3.5))
// console.log(Math.floor(3.6))
// console.log(Math.min(4 ,5,8,2,12))
// console.log(Math.max(4 ,5,8,2,12))

console.log(Math.random()) // gives valu between 0 to 1

console.log(Math.random()*10) // to get no above 0

console.log(Math.floor(Math.random()*10) + 1) // to avoid 0 as value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // for getting value between range