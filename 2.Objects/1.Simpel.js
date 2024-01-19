const person = {
  firstName: "Marieke",
  lastName: "Saliën",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  age: 28,
  greet: function () {
    return `Hello, My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  },
};
console.log(person.greet());
