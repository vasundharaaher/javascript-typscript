// let date = new Date()

// console.log(typeof date);


// // Wed May 13 2026
// console.log(date.toDateString())

// // 2026-05-13T09:45:40.364Z
// console.log(date.toISOString())

// // 2026-05-13T09:45:40.364Z
// console.log(date.toJSON())

// // 13/5/2026
// console.log(date.toLocaleDateString())

// // 13/5/2026, 3:15:40 pm
// console.log(date.toLocaleString())

// // Wed May 13 2026 15:15:40 GMT+0530 (India Standard Time)
// console.log(date.toString())




// let myCreatedDate = new Date(2023, 0, 23, 5, 8)

// let myCreatedDate = new Date("2023-02-23")

// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-15-2023")

let myTimeStamp = Date.now()


// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

// console.log(Math.floor(myTimeStamp / 1000));


console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString('default',{
    weekday:"long"
}));


