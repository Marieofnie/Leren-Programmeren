function makePerson(firstName, lastName, age) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    age: age,
    greet: function () {
      return `Hello, My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    },
  };
}
const person1 = makePerson("Marieke", "Saliën", 28);
const person2 = makePerson("Theo", "Kaka", 67);
const person3 = makePerson("Thea", "Pipi", 45);

console.log(person1.greet());
console.log(person2.greet());
console.log(person3.greet());
