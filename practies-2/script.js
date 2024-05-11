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
console.log(position)