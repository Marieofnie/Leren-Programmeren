// given [2,1,6,4]
//     expected => [8,1,216,64] => the power 3
//     thirdPower([2,1,6,4])

function thirdPower(num) {
  return num.map((n) => Math.pow(n, 3));
}
console.log(thirdPower([2, 1, 6, 4]));
