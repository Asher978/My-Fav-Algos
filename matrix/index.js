// Write a function `matrix(n)` that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]



function matrix (n) {

  let results = createResult(n);
  
  // number thats being pushed into the index of the array
  let counter = 1;

  // variables that will track the beginning and ending of rows & cols
  let startCol = 0;
  let endCol = n-1;
  let startRow = 0;
  let endRow = n-1;

  while(startCol <= endCol && startRow <= endRow) {

    // top row
    for (let i=startCol; i<=endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // right column
    for (let i=startRow; i<=endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    };
    endCol--;
    
    //Bottoms row
    for (let i=endCol; i>=startCol; i--) {
      results[endRow][i] = counter;
      counter++;
    };
    endRow--;

    // Start column
    for (let i=endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++;
    };
    startCol++;
  }

  return results;

};

// helper function to create the result set of arrays
function createResult (n) {
  let arr = [];
  for (let i=0; i<n; i++) {
    arr.push([]);
  }
  return arr;
}

module.exports = matrix;