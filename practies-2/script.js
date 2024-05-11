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
 * Question 3:
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

/**
 * Question 4:
 * find the number between 1 to 100 those are divided by 3,5 and both 3 and 5.
 */

const numberFinder = (number) => {
    let threeD = [],
        fiveD = [],
        bothD = [];

    for (let i = 1; i <= number; i++) {
        if (i % 3 == 0) {
            threeD.push(i);
        }
        if (i % 5 == 0) {
            fiveD.push(i);
        }
        if (i % 3 === 0 && i % 5 === 0) {
            bothD.push(i);
        }
    }

    const response = {
        'threeDivided': threeD,
        'fiveDivided': fiveD,
        'bothDivided': bothD
    }

    return response;
}
console.log(numberFinder(100));