// Write a JavaScript program to find the types of a given angle.  Go to the editor
//     Types of angles:
//         Acute angle: An angle between 0 and 90 degrees.
//         Right angle: An 90 degree angle.
//         Obtuse angle: An angle between 90 and 180 degrees.
//         Straight angle: A 180 degree angle.

function angleType(number) {
  if (number < 90) {
    return "Acute angle";
  } else if (number === 90) {
    return "Right angle";
  } else if (number < 180) {
    return "Obtuse angle";
  } else if (number === 180) {
    return "Straight angle";
  }
}

console.log(angleType(45));
console.log(angleType(90));
console.log(angleType(120));
console.log(angleType(180));
