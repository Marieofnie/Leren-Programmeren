const vraag1 = 3853;
const vraag2 = 799;
const vraag3 = 2;
const vraag4 = 21;

const sum = vraag1 + vraag2 + vraag3 + vraag4;
// console.log(sum);
// 4656

const vijfMacht = Math.pow(sum, 5);
// console.log(vijfMacht);
// // 2188088372049739800

const arr = vijfMacht.toString().split("");
// console.log(arr);
// [
//     '2', '1', '8', '8', '0',
//     '8', '8', '3', '7', '2',
//     '0', '4', '9', '7', '3',
//     '9', '8', '0', '0'
//   ]

const deelbaar3 = arr.filter((n) => n % 3 == 0);
// console.log(deelbaar3);
// [
//     '0', '3', '0',
//     '9', '3', '9',
//     '0', '0'
//   ]

const driedeMacht = [];
let p = 3;
for (let i = 0; i < deelbaar3.length; i++) {
  driedeMacht.push(Math.pow(deelbaar3[i], p));
}

// console.log(driedeMacht);
// [ 0, 81, 0, 531441, 2187, 43046721, 0, 0 ]

function summeke(arr) {
  return arr.reduce((acc, n) => (acc += n), 0);
}

const summer = summeke(driedeMacht);
console.log(summer);
// 43580430

const code = summer / 2;

console.log(code);
//756
