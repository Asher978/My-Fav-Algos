// Create a function called `fib(n)` that prints out the n-th entry 
// in the fibonacci series. The fibonacci series is an ordering of 
// numbers where each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/* iterative solution 
function fib (n) {

  const results = [0, 1];
  
  for (let i =2; i<=n; i++) {
    const a = results[i-1];
    const b = results[i-2];
    results.push(a+b);
  }
  return results[n];
}; */

/* recursive solution - has exponential run time (2 ^ n)
function fib (n) {

  // base case
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}; */

// recursive solution - with memoization for a better time complexity
function slowFib (n) {
  
  // base case
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

// memoization function
function memoize (fn) {
  
  // object that will hold the func args and its values
  const cache = {};

  return (...args) => {
    if(cache[args]) return cache[args];

    // if the called arg does not exist in the obj that
    // means the fn has never been called with that arg
    // so store the result of that fn with the arg
    const result = fn.apply(this, args);

    // storing the result to the obj
    cache[args] = result;
    return result;
  }
};

const fib = memoize(slowFib)


module.exports = fib;