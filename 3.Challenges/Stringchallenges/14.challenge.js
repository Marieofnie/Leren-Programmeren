// Write a Javascript function that calculate the distance between two coordinates.
// 	getDistance([20,100],[50,800])
function getDistance([x1, y1], [x2, y2]) {
  const x = x2 - x1;
  const y = y2 - y1;
  return Math.sqrt(x * x + y * y);
}

console.log(getDistance([20, 100], [50, 800]));
