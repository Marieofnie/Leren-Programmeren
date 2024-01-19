// Write a JavaScript function to get a random item from an array.
function randomItem(string) {
  let array = string.split(",");
  let randomizer = array.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  return randomizer[1];
}

console.log(
  randomItem("keukenmes,snijplank,bord,lepel,vork,mes,koffiekan,theekopje")
);
