// Write a JavaScript function to generate an array with the first X Fibonacci numbers.
const fibonacci = new Array(500).fill(0).reduce(
  function (acc, el, i, arr) {
    acc.push(acc[i] + acc[i + 1]);
    return acc;
  },
  [0, 1]
);
console.log(fibonacci);
