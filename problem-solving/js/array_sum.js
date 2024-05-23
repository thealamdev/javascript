
/**
 * Given an array of integers, find the sum of its elements.
 */
function print(value) {
    console.log(value);
}

function sumOfArray(ar) {
    let sum = 0,
        len = ar.length;

    for (let i = 0; i < len; i++) {
        sum += ar[i];
    }
    return sum;
}

print(sumOfArray([1, 2, 3, 4, 10, 11]));