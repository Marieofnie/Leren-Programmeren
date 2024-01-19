// extension of first challenge:
// 	Every time a value in the array is divisible by 20 add an (asterisk)* to it
function generateMultiplicationTable(tableNum) {
  const arr = [];
  for (i = 0; i < 1000; i++) {
    arr[i] = tableNum * (i + 1);
  }
  return arr;
}
const numbers = generateMultiplicationTable(5);

function addAsterisk(arr) {
  return arr.map((n) => (n % 20 === 0 ? n + `*` : n));
}
console.log(addAsterisk(numbers));
