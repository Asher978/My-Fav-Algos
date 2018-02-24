/*
Create a function called maxChar which takes a string as an arguement, and returns the character that is most commonly used in the string.
*/

// map the string to an object by how many times it appeared
function maxChar (str) {
  
  const strObj = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {

    strObj[char] = strObj[char] + 1 || 1;
    /* the above statement ^^^ is a refactored of
    if (strObj[char]) {
      strObj[char]++;
    } else {
      strObj[char] = 1;
    } */

  }
  
  for (let char in strObj) {
    if (strObj[char] > max) {
      max = strObj[char];
      maxChar = char;
    }
  }
  return maxChar;
};

module.exports = maxChar;