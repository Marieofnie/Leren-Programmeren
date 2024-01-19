// Write a JavaScript function to remove a specific element from an array
//     const myNames = ["John","Cindy","Omer","Barbie","Barbie"];
//     removeSpecificelement(myNames,"Barbie");

function removeSpecificelement(myNames, target) {
  const index = myNames.indexOf(target);
  myNames.splice(index, 1);
  return myNames;
}
console.log(
  removeSpecificelement(["John", "Cindy", "Omer", "barbie", "Barbie"], "barbie")
);
