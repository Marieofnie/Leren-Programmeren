// Maak een object constructor Cup.
// Elke cup heeft een string dat bijhoudt welke drank er in zit.
// Elke cup heeft ook een waarde hoeveel vloeistof de cup bevat.
// Er bestaan cups met verschillende maten. Elke cup moet dus ook bijhouden hoeveel vloeistof
// ze maximaal kunnen bevatten. Van elke cup wordt ook bijgehouden welke kleur ze hebben.
// Elke cup bevat ook een booleanwaarde isTransparent.
// Geef elke cup de volgende methods:
// - addFluid(hoeveelheid)
// - removeFluid(hoeveelheid)
// - empty()

function Cup(whichDrink, amountOfFluid, maxFluid, color, isTransparent) {
  this.whichDrink = whichDrink;
  this.amountOfFluid = amountOfFluid;
  this.maxFluid = maxFluid;
  this.color = color;
  this.isTransparent = isTransparent;
}

(Cup.prototype.addFluid = function (amountOfFluid) {
  if (this.maxFluid < this.amountOfFluid + amountOfFluid) {
    throw `You are not allowed to add ${amountOfFluid} there is already 
        ${this.amountOfFluid} in your cup which will exceed the maximum of ${this.maxFluid}`;
  } else {
    return (this.amountOfFluid += amountOfFluid);
  }
}),
  (Cup.prototype.removeFluid = function (amountOfFluid) {
    if (this.maxFluid < amountOfFluid) {
      this.empty();
    } else {
      return (this.amountOfFluid -= amountOfFluid);
    }
  });
Cup.prototype.empty = function () {
  this.amountOfFluid = 0;
};

// Nadat je deze object constructor hebt gebouwd ga je met deze aan de slag:
// maak 8 cups-instances en plaats ze in een array.

const cup1 = new Cup("Pornstar Martini", 3, 30, "green", true);
const cup2 = new Cup("Rum", 4, 20, "yellow", true);
const cup3 = new Cup("Cola", 7, 16, "orange", false);
const cup4 = new Cup("Wiskey", 2, 25, "red", true);
const cup5 = new Cup("Fanta", 8, 35, "blue", false);
const cup6 = new Cup("Gin", 9, 8, "black", false);
const cup7 = new Cup("Pina Colada", 10, 27, "purple", false);
const cup8 = new Cup("Kriek", 13, 20, "pink", true);

// console.log(cup1);
// console.log(cup2);
// console.log(cup3);
// console.log(cup4);
// console.log(cup5);
// console.log(cup6);
// console.log(cup7);
// console.log(cup8);

const cups = [cup1, cup2, cup3, cup4, cup5, cup6, cup7, cup8];

// console.log(cups);
// [
//     Cup {
//       whichDrink: 'Pornstar Martini',
//       amountOfFluid: 3,
//       maxFluid: 30,
//       color: 'green',
//       isTransparent: true
//     },
//     Cup {
//       whichDrink: 'Rum',
//       amountOfFluid: 4,
//       maxFluid: 20,
//       color: 'yellow',
//       isTransparent: true
//     },
//     Cup {
//       whichDrink: 'Cola',
//       amountOfFluid: 7,
//       maxFluid: 16,
//       color: 'orange',
//       isTransparent: false
//     },
//     Cup {
//       whichDrink: 'Wiskey',
//       amountOfFluid: 2,
//       maxFluid: 25,
//       color: 'red',
//       isTransparent: true
//     },
//     Cup {
//       whichDrink: 'Fanta',
//       amountOfFluid: 8,
//       maxFluid: 35,
//       color: 'blue',
//       isTransparent: false
//     },
//     Cup {
//       whichDrink: 'Gin',
//       amountOfFluid: 9,
//       maxFluid: 8,
//       color: 'black',
//       isTransparent: false
//     },
//     Cup {
//       whichDrink: 'Pina Colada',
//       amountOfFluid: 10,
//       maxFluid: 27,
//       color: 'purple',
//       isTransparent: false
//     },
//     Cup {
//       whichDrink: 'Kriek',
//       amountOfFluid: 13,
//       maxFluid: 20,
//       color: 'pink',
//       isTransparent: true
//     }
//   ]

// console.log(cup1.addFluid(14));
// 17
// console.log([cup2.addFluid(6)]);
// 10
// console.log([cup3.addFluid(40)]);
// throw `You are not allowed to add ${amountOfFluid} there is already
// ^
// You are not allowed to add 40 there is already
//     7 in your cup which will exceed the maximum of 16
// (Use `node --trace-uncaught ...` to show where the exception was thrown)

// los volgende challenges op:
// - print een html-ul lijst uit met alle namen van alle inhouden. (er kunnen dubbele zijn)
function generateHTML() {
  return `<ul>${cups
    .map(({ whichDrink }) => `<li>${whichDrink}</li>`)
    .join("")}</ul>`;
}
// console.log(generateHTML());
// <ul><li>Pornstar Martini</li><li>Rum</li><li>Cola</li><li>Wiskey</li><li>Fanta</li><li>Gin</li><li>Pina Colada</li><li>Kriek</li></ul>

// - bereken de totale vloeistof van alle bekers samen
function fluidTotal() {
  return cups.reduce(function (total, cup) {
    return total + cup.amountOfFluid;
  }, 0);
}

// console.log(fluidTotal());
//56

// - bereken de totale vloeistof van alle bekers dat transparant zijn
function totalFluidIsTransparent(arr) {
  return arr
    .filter((cup) => cup.isTransparent)
    .reduce((acc, cup) => acc + cup.amountOfFluid, 0);
}

// console.log(totalFluidIsTransparent(cups));
// 22

// - bereken de totale vloeistof van alle bekers die tot meer dan de helft van hun capaciteit hebben
function totalHalf(arr) {
  return arr
    .filter((cup) => cup.maxFluid / 2 < cup.amountOfFluid)
    .reduce((acc, cup) => acc + cup.amountOfFluid, 0);
}
// console.log(totalHalf(cups));
// 22

// - bereken het gemiddelde van de vloeistof van alle bekers die een rode of oranje kleur hebben
function totalOrangeRed(arr) {
  return arr
    .filter((cup) => ["red", "orange"].includes(cup.color))
    .reduce((acc, cup, i, arr) => acc + cup.amountOfFluid / arr.length, 0);
}
console.log(totalOrangeRed(cups));
// 4.5

// - print een html-ul lijst uit met alle UNIEKE namen van alle inhouden.
function generateHTML() {
  return (
    "<ul>" +
    [...new Set(cups.map((c) => c.whichDrink))]
      .map(({ whichDrink }) => `<li>${whichDrink}</li>`)
      .join("") +
    "</ul>"
  );
}
