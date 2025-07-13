
console.log('if , else and else-if')
let temperature = 25;

if (temperature > 25){
    console.log('it is hot outside');
} else if (temperature>=25 ){
    console.log('it is warm outside');
} else {
    console.log('it is cool outside');
}

console.log('While');
let count = 0;
while (count < 10){
    console.log('count is: '+ count);
    count++;
}

let fruits = ['apple' , 'banana' , 'cherry'];
let index = 0;
while(index < fruits.length){
    console.log('Fruits: ' + fruits[index]);
    index++;
}