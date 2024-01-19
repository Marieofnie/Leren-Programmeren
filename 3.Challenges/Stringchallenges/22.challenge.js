// Write a JavaScript function that returns array elements larger than a number

//     given:
//         var numbers = [5,2,20,60,45];
//         var toCheck = 6;

//     returned array:
//         [20,60,45]

function largerThan(numbers, toCheck) {
  return numbers.filter((i) => i > toCheck);
}

console.log(largerThan([5, 2, 20, 60, 45], 6));
