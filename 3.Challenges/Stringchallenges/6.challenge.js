// - Write a JavaScript function to alphabetize a given string.
// 	console.log(alphabetize_string('United States'));
// 		"SUadeeinsttt"
function alphabetize_string(string) {
  return string.split("").sort().join("");
}
console.log(alphabetize_string("United States"));
