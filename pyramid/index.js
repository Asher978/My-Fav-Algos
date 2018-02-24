// Write a function called `pyramid(n)` that accepts a positive number N
// as an arguement. The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Iterative Solution 
function pyramid (n) {

  // middle of column index
  // (2*n-1) is the relation between (n) and number of columsn we should have
  const midColInd = Math.floor((2*n-1) / 2); 


  for (let row = 0; row < n; row ++) {
    let level = '';
    for (let col = 0; col < 2*n-1; col ++) {

      if(midColInd - row <= col && midColInd + row >= col) {
        level += '#';
      } else {
        level += ' ';
      }
      // below is refactor of the ^^^ if condition
      // const add = (midColInd - row <= col && midColInd + row >= col) ? '#' : ' ';
      // level += add;
    }
    console.log(level);
  }
};

module.exports = pyramid;