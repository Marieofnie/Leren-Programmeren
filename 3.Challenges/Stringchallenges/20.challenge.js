// Write a function to remove all strings with less than X characters from an array of strings
const sigaretten = [
  "Camel",
  "Chesterfield",
  "Gauloises",
  "jps",
  "Kent",
  "Vogue",
  "Lucky Strike",
  "Marlboro",
];

function removeLess(array, x) {
  return array.filter((s) => s.length > x);
}

// function removeLess(array, x) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length < x) {
//       array.splice(i, 1);
//       i--;
//     }
//   }
//   return array;
// }
console.log(removeLess(sigaretten, 6));
