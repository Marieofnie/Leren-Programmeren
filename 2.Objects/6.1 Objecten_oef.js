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
console.log(persons);
// [
//     { Name: 'Marieke', Age: 28, Result: 20 },
//     { Name: 'Josephine', Age: 65, Result: 14 },
//     { Name: 'Pascal', Age: 60, Result: 18 },
//     { Name: 'Billy', Age: 14, Result: 7 },
//     { Name: 'Caroline', Age: 26, Result: 10 }
//   ]

let sum = 0;
for (let i = 0; i < persons.length; i++) {
  sum += persons[i].Result;
}
const avg = sum / persons.length;
console.log(avg);

// const sumResults =
//   persons[0].Result +
//   persons[1].Result +
//   persons[2].Result +
//   persons[3].Result +
//   persons[4].Result;
// console.log(sumResults);;
