/*Create a function called `reverseInt()`, which takes `integer/integers` as an argument and reverses the order of the given `integer/integers`.
*/

// usage of `Math.sign(integer)`
function reverseInt (int) {
  let myInt = int.toString().split('').reduce((rev, char) => char + rev, '');

  return parseInt(myInt) * Math.sign(int);
};

module.exports = reverseInt;