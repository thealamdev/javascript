/**
 * What is callback funciton in js?
 * where we will use it. 
 * Importance of callbacks
 */

/**
 * Answers: Callback function is a speciall type of function where we use a function as a paramerter.
 */

function display(result) {
    console.log(result);
}

function calculate(number1, number2, callback) {
    let sum = number1 + number2;
    if (callback) callback(sum);
}

calculate(10, 20, display);
calculate(10, 50);