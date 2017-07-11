//Reject a promise
var promReject = new Promise(function(fulfill, reject) {
    setTimeout(function() {
        reject(new Error('REJECTED!'));
    }, 300);
});
    function onReject(err) {
        console.log(err.message)
};
promReject.then(null, onReject);   