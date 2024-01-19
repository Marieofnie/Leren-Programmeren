// - Write a JavaScript function to get unique guid (an acronym for 'Globally Unique Identifier?) of the
// specified length, or 32 by default.
// 	console.log(guid());
// 		"hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
// 	console.log(guid(15));
// 		"b7pwBqrZwqaDrex"

function guid(len) {
  let variable = [];
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let charLength = characters.length;
  let length = len || 32;
  for (let i = 0; i < length; i++) {
    variable[i] = characters.charAt(Math.floor(Math.random() * charLength));
  }
  return variable.join("");
}

console.log(guid());
console.log(guid(15));
