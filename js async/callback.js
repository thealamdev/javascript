/**
 * What is callback funciton in js?
 * where we will use it. 
 * Importance of callbacks
 */

/**
 * Answers: Callback function is a speciall type of function where we use a function as a paramerter.
 */

function openBook() {
    return 'Open the book';
}

function readBook(openBook) {
    return openBook();
}