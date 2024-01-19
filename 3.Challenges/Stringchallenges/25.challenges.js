// Write a JavaScript function to merge two arrays and removes all duplicates elements.

//     FROM HERE NO FOR LOOPS ALLOWED
function mergeRemove(a1, a2) {
  const merge = a1.concat(a2);
  const remove = [...new Set(merge)];
  return remove;
}
const result = mergeRemove(
  ["Kevin", "Phebe", "Wouter", "Ronchi", "Lily", "Charlie"],
  ["Kaka", "Pipi", "Lily"]
);
console.log(result);
