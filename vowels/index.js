// Write a function called `vowels(str)` that takes a string as an arguement and returns 
// the number of vowels used in the given string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


/* iterative solution
function vowels (str) {
  const vow = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let count = 0;

  for (let letter of str) {
    vow.includes(letter) ? count++ : false;
  }
  return count;
}; */ 


/* Solution with the usage of String.prototype.includes()
function vowels (str) {
  let counter = 0;
  const vowel = "aeiouAEIOU";
  for (let letter of str) {
    if(vowel.includes(letter)) {
      counter ++;
    }
  }
  return counter;
}; */


// soultion with the usage of regExp and match()
function vowels (str) {
  const matches = str.match(/[aeiou]/gi);

  // note that the match() returns null if nothing is found 
  return matches ? matches.length : 0;
};


module.exports = vowels;