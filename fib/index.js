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

// recursive solution - has exponential run time (2 ^ n)
function fib (n) {

  // base case
  if (n < 2) return n;
  
  return fib(n - 1) + fib(n - 2);
};

module.exports = fib;