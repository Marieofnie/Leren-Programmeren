// given ["Ellen","bert","Bart","zaki","Sandra","Soroush"]
//     remove all the names that do not start with a capital
const names = ["Ellen", "bert", "Bart", "zaki", "Sandra", "Soroush"];
// const onlyCapitals = names.filter((name) => /^[a-z]/);
const filteredNames = names.filter((name) => /^[A-Z]/.test(name));

console.log(filteredNames);
