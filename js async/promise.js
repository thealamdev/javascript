
const status = false;

console.log('Task 1');

const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (status) {
            resolve('Task 2');
        } else {
            reject('Failed')
        }
    }, 2000)
});

/**
 * Calling the promise
 */
promise.then(function (value) {
    console.log(value)
}).catch(function (error) {
    console.log(error);
})

console.log('Task 3');
