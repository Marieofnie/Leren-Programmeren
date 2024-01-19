function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
};

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const person1 = new Person("Gert", "Bertels", 55);
