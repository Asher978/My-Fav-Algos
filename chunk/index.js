/*
Create a function `chunk(array, size)`, which takes two arguements an array and chunk size. Divide the array into many subarrays where each subarray is of length size.
--- Examples ---
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
*/

/* SOULTION # 1 

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
*/

// SOULTION # 2
function chunk (array, size) {
  const chunked = [];
  let index = 0;

  // The condition below will be true as long as we are working
  // with the index from the array. Once the index becomes outside
  // the array we will break from the while loop.
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
};

module.exports = chunk;