// Write a JavaScript program which accept a string as input and swap the case of each character.
//     For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
function swappie(string) {
  const swap = string
    .split("")
    .map((item) =>
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    )
    .join("");
  return swap;
}
console.log(swappie("The Quick Brown Fox"));
