// Write a JavaScript function to compute the sum of an array of integers.
function sumOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum;
}

console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
