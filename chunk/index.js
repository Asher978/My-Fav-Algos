/*
Create a function `chunk(array, size)`, which takes two arguements an array and chunk size. Divide the array into many subarrays where each subarray is of length size.
--- Examples ---
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
*/

function chunk (array, size) {
  const chunked = [];
  
  for (let element of array) {

    // grab the last array from the chunked array
    const last = chunked[chunked.length - 1];

    // if (last does not exist) or (last array's length is equal to size)
    if (!last || last.length === size) {

      // this will execute ONLY if the chunked array is empty or if the array's 
      // length in chunked (last) is equal to size
      chunked.push([element]);
    } else {

      // otherwise just push that element into the array in chunked array
      last.push(element);
    }
  }
  return chunked;
};

chunk([2, 4, 2, 5, 7, 8, 1], 3);

module.exports = chunk;