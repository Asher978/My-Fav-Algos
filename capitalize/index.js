/*
Write a function called `capitalize()` that accepts a string as an arguement.  The function should
capitalize the first letter of each word in the string then
return the capitalized string.
*/


// SOULTION # 1
function capitalize (str) {
  
  const words = [];
  
  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
};

module.exports = capitalize;