// eigen properties
function Car(brand, model, color, fuelType) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.speed = 0;
  this.fuelType = fuelType;
}

// gesharede properties (meestal)
Car.prototype.numberOfWheels = 4;
Car.prototype.hasAirco = true;

// abilities
Car.prototype.accelerate = function (speed) {
  this.speed += speed;
};
Car.prototype.decelerate = function (speed) {
  if (this.speed < speed) {
    this.stop();
  } else {
    this.speed -= speed;
  }
};
Car.prototype.stop = function () {
  this.speed = 0;
};

const car1 = new Car("Peugeot", "508 SW", "black", "E10");
const car2 = new Car("BMW", "X5", "red", "B7");
const car3 = new Car("Volkswagen", "Transporter", "grey", "E5");
const car4 = new Car("Mitsubishi", "SpaceStar", "blue", "E10");
const car5 = new Car("Citroën", "C4", "grey", "E5");

car1.speed = 27;
car2.speed = 30;
car3.speed = 50;
car4.speed = 40;
car5.speed = 30;

//zorg ervoor dat de snelheid niet negatief kan zijn (niet meer dan 0 kan zakken)

// plaats alle wagens in een array
const cars = [car1, car2, car3, car4, car5];

// function getAvgOfAllCars() {
//   let totalSpeed = 0;
//   for (let i = 0; i < cars.length; i++) {
//     totalSpeed += cars[i].speed;
//   }
//   return totalSpeed / cars.length;
// }

function getAvgOfAllCars2() {
  return cars.reduce((acc, car) => (acc += car.speed), 0) / cars.length;
}
getAvgOfAllCars2();

// 1) bereken de gemiddelde snelheid van alle wagens.
// 2) genereer een comma seperated string van alle merken

function getCommaSeperatedStringOfBrands() {
  return cars
    .map(function (car) {
      return car.brand;
    })
    .join();
}

// 3) genereer een html ul met alle li's van alle merken in je array
function generateListInHtml() {
  // return cars.map(function(car){return "<li>"+car.brand+"</li>" }).join("")
  //   return (
  //     "<ul>" + cars.map((car) => "<li>" + car.brand + "</li>").join("") + "</ul>"
  //   );

  //   return `<ul>${cars.map(c=>`<li>${c.brand}</li>`).join("")}</ul>`

  return `<ul>${cars.map(({ brand }) => `<li>${brand}</li>`).join("")}</ul>`;
}
// 4) schrijf de code om alle wagens te stoppen
function stopAllCars() {
  cars.forEach((c) => c.stop());
}

// 5) hoeveel wagens hebben een snelheid boven de 30 ?
function getCountOfCarsAbove30() {
  return cars.filter(({ speed }) => speed > 30).length;
}

// 6) schrijf de code om alle wagens alternerend/afwisselend een rood en grijze kleur te geven
function changeColorsAlternate() {
  cars.forEach(function (car, i) {
    car.color = i % 2 == 0 ? "red" : "grey";
  });
}

// 7) print de merk en model van de snelst rijdende wagen

const fastest = cars.sort(function (a, b) {
  return b.speed - a.speed;
})[0];

console.log(fastest.brand, fastest.model);
