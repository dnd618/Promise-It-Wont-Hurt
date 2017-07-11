//Reject & resolve a promise
var promise = new Promise(function(fulfill,reject) {
    fulfill('I FIRED');
    reject(new Error('REJECTED!'));
});
    function onReject (error) {
        console.log(error.message)
    }
promise.then(console.log, onReject);