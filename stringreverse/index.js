/*
Create a function called 'reverse', that takes 'str' as an argument and returns the reverse of the given string.
*/

/* SOLUTION # 1 (usage of `for of ... & string interpolation`)
function reverse (str) {
  let reversed = '';
  for (let character of str) {
    reversed = `${character}${reversed}`
  };
  return reversed;
} */

/* SOULTION # 2 (usage of Array method `Array.prototype.reduce()`)
function reverse (str) {
  return str.split('').reduce((rev, char) => char + rev);
} */

/* SOULTION # 3 (usage of Array method `Array.prototype.reverse()`)
function reverse (str) {
  return str.split('').reverse().join('');
} */

module.exports = reverse;