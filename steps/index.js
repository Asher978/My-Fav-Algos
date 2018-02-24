// Write a function called `steps(n)` that accepts a positive number N
// as an argueent. The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


/* SOULTION # 1
function steps (n) {

  for (let row = 0; row < n; row ++) {
    let stairs = '';

    for (let col = 0; col < n; col ++) {

      if (col <= row) {
        stairs += '#';
      } else {
        stairs += ' ';
      }
    }
    console.log(stairs)
  }
};
*/

// SOLUTION # 2 (with recursion)
function steps (n, row=0, stairs='') {

  // base case
  if (n === row) { return };

  // case where we are done with the row
  if (stairs.length === n) {
    console.log(stairs);
    return steps(n, row + 1);
  };

  // case where we are building the row
  if (stairs.length <= row) {
    stairs += '#';
  } else {
    stairs += ' ';
  }

  // refactor of ^^^ above if statement
  // const add = stairs.length <= row ? '#' : ' ';
  // steps(n, row, starirs + add);
  
  steps(n, row, stairs);
};


module.exports = steps;