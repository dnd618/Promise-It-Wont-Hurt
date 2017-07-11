//Asynchronous promises
var promise = new Promise(function(fulfill, reject){
    fulfill('PROMISE VALUE');
});
promise.then(function(fulfill){
    console.log(fulfill);
});
console.log('MAIN PROGRAM');