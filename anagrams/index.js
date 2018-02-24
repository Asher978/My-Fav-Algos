/*
Check to see if two provided strings are anagrams of eachother.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case
*/


// SOLUTION # 1 
function anagrams (stringA, stringB) {
  
  const mapOne = mapString(stringA);
  const mapTwo = mapString(stringB);
  
  // if the keys in both object are not the same then return false (no anagram here)
  if(Object.keys(mapOne).length !== Object.keys(mapTwo).length) {
    return false;
  };

  // if the keys are the same length in both objects then compare each key 
  // if each key is same return true (anangram exist)
  // if each key is not the same return false (no anagram)
  for (let char in mapOne) {
    if (mapOne[char] !== mapTwo[char]) {
      return false;
    };
  };
  return true;  
};

// helper function to map the strings to an object
function mapString (str) {
  const strObj = {};
  const newStr = str.replace(/[^\w]/g, '').toLowerCase();
  for (let character of newStr) {
    strObj[character] = strObj[character] + 1 || 1;
  }
  return strObj;
}; 


module.exports = anagrams;