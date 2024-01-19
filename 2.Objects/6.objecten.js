const person = {
  name: "Marieke",
  age: 28,
};
console.log(person);
// { name: 'Marieke', age: 28 }
console.log(person.age);
//28 (dot notation)
console.log(person.name);
// "Marieke" (dot notation)

console.log(person["age"]);
//28 (bracket notation)
console.log(person["name"]);
// "Marieke" (bracket notation)

const opTeVragenProperties = "name";
console.log(person[opTeVragenProperties]);
// "Marieke" (bracket notation)

for (prop in person) {
  console.log(prop);
}
//
for (prop in person) {
  console.log("De eigenschap ${prop} heeft als waarde ${person[prop]}.");
}
// "De eigenschap name heeft als waarde Marieke."
// De eigenschap age heeft als waarde 20

//Opdracht: Array maken van 5 studenten, elke student heeft naam, leeftijd, en resultaat op 20
// Doel: gemiddelde uitprinten van alle resultaten samen

const persons = [
  {
    Name: "Marieke",
    Age: 28,
    Result: 20,
  },
  {
    Name: "Josephine",
    Age: 65,
    Result: 14,
  },
  {
    Name: "Pascal",
    Age: 60,
    Result: 18,
  },
  {
    Name: "Billy",
    Age: 14,
    Result: 7,
  },
  {
    Name: "Caroline",
    Age: 26,
    Result: 10,
  },
];
