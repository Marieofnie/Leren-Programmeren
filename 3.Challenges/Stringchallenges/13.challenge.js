// Write a Javascript function that return an array with even numbers between a range
// 	getEvenNumbersInRange(56,1211)

function getEvenNumbersInRange(start, end) {
  let startCijfer = parseInt(start);
  let endCijfer = parseInt(end);
  let list = [];

  while (startCijfer <= endCijfer) {
    list.push(startCijfer++);
  }
  let evenNumbers = list.filter(function (number) {
    return number % 2 === 0;
  });
  return evenNumbers;
}
console.log(getEvenNumbersInRange(56, 1211));
