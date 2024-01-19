// Write a JavaScript function that returns an array with generated  Multiplication Table of a given number (max. 1000 iterations)
// 	var result =  generateMultiplicationTable(5);
// 	console.log(result);

function generateMultiplicationTable(tableNum) {
  const arr = [];
  for (i = 0; i < 1000; i++) {
    arr[i] = tableNum * (i + 1);
  }
  return arr;
}
console.log(generateMultiplicationTable(5));

// function generateMultiplicationTable(number) {

//     const numbers = [];
//     for (let i = 1; i <= 1000; i++) {
//       numbers.push(number * i);
//     }

//     return numbers;
//   }

//   const result = generateMultiplicationTable(5, 10);

//   console.log(result);
