// given [2,1,6,4]
//     calc avg
//     calc sum    (reduce)
const arr = [2, 1, 6, 4];
const sum = arr.reduce(function (a, b) {
  return a + b;
}, 0);
const avg = sum / arr.length;
console.log(sum);
console.log(avg);

// const sum = arr.reduce(function(a,b){return a+b},0)
