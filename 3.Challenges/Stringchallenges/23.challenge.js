// Write a Javascript function to generate a random color in format rgb(0,0,0);
function randomNr(max) {
  return Math.floor(Math.random() * max);
}
const nr1 = randomNr(255);
const nr2 = randomNr(255);
const nr3 = randomNr(255);

console.log(`rgb(${nr1},${nr2},${nr3})`);
