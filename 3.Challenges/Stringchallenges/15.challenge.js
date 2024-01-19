// Write a JavaScript function to check if a certain word is a Palindrome.
function Palindrome(string) {
  const array = string.split("");
  const reverseArray = array.reverse();
  const reverseString = reverseArray.join("");
  return string === reverseString;
}
console.log(Palindrome("lepel"));
