// - Write a JavaScript function to chop a string into chunks of a given length.
// 	console.log(string_chop('w3resource'));
// 		["w3resource"]
// 	console.log(string_chop('w3resource',2));
// 		["w3", "re", "so", "ur", "ce"]
// 	console.log(string_chop('w3resource',3));
// 		["w3r", "eso", "urc", "e"]

//1. basis function
//2.

function string_chop(basis, lengte) {
  const nrOfParts = Math.ceil(basis.length / lengte);
  const arr = [];
  for (let i = 0; i < nrOfParts; i++) {
    arr.push(basis.substring(i, i + lengte));
  }
  return arr;
}
console.log(string_chop("w3resource", 2));
