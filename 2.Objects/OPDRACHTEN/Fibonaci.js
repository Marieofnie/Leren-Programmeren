const fibonacci = new Array(500).fill(0).reduce(
  function (acc, el, i, arr) {
    acc.push(acc[i] + acc[i + 1]);
    return acc;
  },
  [0, 1]
);
console.log(fibonacci);
