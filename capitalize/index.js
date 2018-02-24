/*
Write a function called `capitalize()` that accepts a string as an arguement.  The function should
capitalize the first letter of each word in the string then
return the capitalized string.
*/


/* SOULTION # 1
function capitalize (str) {
  
  const words = [];
  
  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
};
*/

// SOULTION # 2
function capitalize (str) {

  let result = str[0].toUpperCase();
  for (let i=1; i<str.length; i++) {
    if (str[i-1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
};

module.exports = capitalize;