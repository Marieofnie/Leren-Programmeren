// Write a Javascript function to return wether a value is divisible by a certain number
// 	isDivisible(333,7)
// 	=> false

function isDivisible(number, div) {
  if (number % div == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isDivisible(333, 7));
