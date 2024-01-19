// given [2,1,6,4]
//     expected => [8,1,216,64] => the power N
//     nthPower([2,1,6,4],16)
function nthPower(num, n) {
  return num.map((i) => Math.pow(i, n));
}
console.log(nthPower([2, 1, 6, 4], 16));
