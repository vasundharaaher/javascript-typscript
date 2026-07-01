const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
    
// }, 0 )

// const myTotal = myNums.reduce((acc,currval) => ( acc + currval ), 0)

// console.log(myTotal);


const courses = [
  {
    courseName: "JavaScript Basics",
    price: 1999
  },
  {
    courseName: "React JS Masterclass",
    price: 3499
  },
  {
    courseName: "Python for Beginners",
    price: 2499
  },
  {
    courseName: "Data Structures in Java",
    price: 2999
  },
  {
    courseName: "Machine Learning Bootcamp",
    price: 5999
  },
  {
    courseName: "Full Stack Web Development",
    price: 7999
  },
  {
    courseName: "Android Development",
    price: 4499
  },
  {
    courseName: "Node.js API Development",
    price: 3999
  },
  {
    courseName: "UI/UX Design Fundamentals",
    price: 2799
  },
  {
    courseName: "Django Web Framework",
    price: 3599
  }
];

const cardprice = courses.reduce((acc,item)=>  acc + item.price , 0)

console.log(cardprice);
