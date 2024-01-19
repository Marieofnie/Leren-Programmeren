// - Write a JavaScript function to test whether the character at the provided (character) index is lower case.
// 	console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
// 		true
function isLowerCaseAt(string, value) {
  const letter = string.at(0);
  return letter === letter.toLowercase;
}
console.log(isLowerCaseAt("Js STRING EXERCISES", 1));
