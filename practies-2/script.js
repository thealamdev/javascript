/**
 * question 1: 
 * const text = "This is Shah alam. i am a student. Shah alam is very good stuedent";
 * find the total number of Shah and the first Shah index
 */

const text = "This is Shah alam. i am a student. Shah alam is very good stuedent";
const matches = text.match(/Shahs/gi);
const totalNumber = matches ? matches.length : 0;
console.log(totalNumber);

let position = text.search(/Shahs/i);
position = position > 0 ? position : 'no found!';
console.log(position);


/**
 * question 2 : 
 * কোন Array থেকে কিভাবে সবথেকে বড় String বের করা যাবে এবং তার index নাম্বার দেখাবেন ? 
 */

const arr = [
    'Shah alam is a good boy',
    'he is good',
    'hi',
    'Onec upon a time there was a girl named onupoma'
];


// console.log(arr)

// let longLength = [];
// let len = arr.length;
// for (let i = 0; i < len; i++) {
//     longLength.push(arr[i].length);
// }

// let long = Math.max.apply(0, longLength);

// for (let i = 0; i < len; i++) {
//     if (long == arr[i].length) {
//         console.log(arr[i]);
//     }
// }

/**
 * alternative way of this
 */

const longestWord = function (arr) {
    let lengWord = '';
    for (value of arr) {
        if (value.length > lengWord.length) {
            lengWord = value;
        }
    }

    return [lengWord, arr.indexOf(lengWord)];
}

console.log(longestWord(arr));

/**
 * input : linearSearch([a,b,c,d,e],'e)
 * output: 2 or not found
 * problem: implement the linearSearch funtion 
 */

const inputArray = ['a', 'b', 'c', 'd', 'e'];

let linearFunction = (inputArray, e) => {
    for (target of inputArray) {
        if (target === e) {
            return [target, inputArray.indexOf(target)];
        }
    }
    return 'No matched found!'
}

console.log(linearFunction(inputArray, 'c'));