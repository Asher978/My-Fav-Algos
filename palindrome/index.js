/*
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. *Do* include spaces
and punctuation in determining if the string is a palindrome.
*/

/* SOULTION # 1 (reverse & compare)
function palindrome (str) {
  let reversed = str.split('').reduce((rev, char) => char + rev, '');
  return reversed === str ? true : false;
}; */


/* SOULTION # 2 (usage of Array method `Array.prototype.every()`)
NOTE: This will have a lobger run time due to the iteration and comparison of each element
function palindrome (str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  })
}; */

module.exports = palindrome;