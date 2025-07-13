
console.log('Error handling')
function divide(a,b){
    try{
        if(b === 0) throw new Error('Divide by zero');
        return a/b;
    } catch(error){
        console.log('Error : ',error.message);
        return null;
    }
}
console.log(divide(10,2));
console.log(divide(10,0));

function readFile(filePath){
    try{
        console.log('Reading file: ',filePath);
        if (filePath === '') throw new Error('File path is empty');
    }
    catch(error){
    console.log('Error: ', error.message);
    return null;
    } finally {
        console.log('cleanup code executed');
    }
}
readFile('data.txt');
readFile('');