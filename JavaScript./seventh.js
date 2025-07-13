
console.log('Asynchronous programming');

console.log('Example 1');
function fetchData(callback){
    setTimeout(() => {
        console.log('Data fetched');
        callback('Here is your data eg1');
    } , 1000 );
}
function handleData(data){
    console.log('Data received : ' , data);
}
fetchData(handleData);




console.log('Example 3');
function fetchDatapromiseasync(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Data fetched');
            resolve('Here is your data eg3');
        } , 1000 );
    });
}
async function getdata() {
    try{
        const data = await fetchDatapromiseasync();
        console.log('Data received : ',data);
    } catch(error){
        console.log('Error : ',error);
    }

    
}
getdata();



console.log('error message');
console.log('Example 2');
function fetchDatapromise(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Data fetched');
            callback('Here is your data eg2');
        } , 1000 );
    })
   
}
fetchDatapromise()
    .then(data => console.log('Data received: ', data ))
    .catch(error => console.log('Error: ', error));