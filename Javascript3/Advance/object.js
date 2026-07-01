const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter)

const eg = {
    name: 'ginger tea',
    price: 250,
    isAvailabel: true
}
console.log(eg);
console.log(Object.getOwnPropertyDescriptor(eg, "name"));

Object.defineProperty(eg , 'name',{
    writable: false,
    enumerable: false       // if false property will not be itrate if true will be itrate
})

console.log(Object.getOwnPropertyDescriptor(eg, "name"));

for (const [key , value] of Object.entries(eg)) {

    if (typeof value !== 'function'){ 
        console.log(key ," : ",value);
    }
}