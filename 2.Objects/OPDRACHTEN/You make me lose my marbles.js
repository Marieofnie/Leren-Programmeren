// You make me lose my marbles

// knikker kleur diametergrootte snelheid, transparant(bool),
// gem.snel, kleur, filter/map/reduce.
// gem grootte alle transparante

//Stap1 Maak een Object Constructor
function Marble(color, diameter, isTransparant) {
  this.color = color;
  this.diameter = diameter;
  this.speed = 0;
  this.isTransparant = isTransparant;
}
//Stap 2 Maak je abilities op het prototype
Marble.prototype.accelerate = function (speed) {
  this.speed += speed;
};

Marble.prototype.decelerate = function (speed) {
  if (this.speed < speed) {
    this.stop();
  } else {
    this.speed -= speed;
  }
};

Marble.prototype.stop = function () {
  this.speed = 0;
};
// Stap 3 genereer je knikkers
const marble1 = new Marble("purple", 10, true);
const marble2 = new Marble("green", 13, false);
const marble3 = new Marble("yellow", 15, true);
const marble4 = new Marble("orange", 8, false);
const marble5 = new Marble("red", 9, true);
const marble6 = new Marble("teal", 6, false);
const marble7 = new Marble("blue", 3, true);
const marble8 = new Marble("black", 5, false);

// Stap 4 log 1 knikker om te zien of hij goed gemaakt is
// console.log(marble1);
// Marble { color: 'purple', diameter: 10, speed: 0, isTransparant: true }

//Stap 5 maak een array met al je knikkers en hun waarden
const marbles = [
  marble1,
  marble2,
  marble3,
  marble4,
  marble5,
  marble6,
  marble7,
  marble8,
];

//Stap 6 test de Array
// console.log(marbles);
// [
//     Marble {
//       color: 'purple',
//       diameter: 10,
//       speed: 0,
//       isTransparant: true
//     },
//     Marble {
//       color: 'green',
//       diameter: 13,
//       speed: 0,
//       isTransparant: false
//     },
//     Marble {
//       color: 'yellow',
//       diameter: 15,
//       speed: 0,
//       isTransparant: true
//     },
//     Marble {
//       color: 'orange',
//       diameter: 8,
//       speed: 0,
//       isTransparant: false
//     },
//     Marble { color: 'red', diameter: 9, speed: 0, isTransparant: true },
//     Marble { color: 'teal', diameter: 6, speed: 0, isTransparant: false },
//     Marble { color: 'blue', diameter: 3, speed: 0, isTransparant: true },
//     Marble {
//       color: 'black',
//       diameter: 5,
//       speed: 0,
//       isTransparant: false
//     }
//   ]

// stap 7 Laat de knikkers maar rollen
marble1.accelerate(2);
marble2.accelerate(5);
marble3.accelerate(3);
marble4.accelerate(7);
marble5.accelerate(6);
marble6.accelerate(9);
marble7.accelerate(3);
marble8.accelerate(2);

marble1.decelerate(1);
marble2.decelerate(2);
marble3.decelerate(3);
marble4.decelerate(5);
marble5.decelerate(4);
marble6.decelerate(3);
marble7.decelerate(5);
marble8.decelerate(4);

marble1.accelerate(5);
marble2.accelerate(7);
marble3.accelerate(8);
marble4.accelerate(3);
marble5.accelerate(9);
marble6.accelerate(2);
marble7.accelerate(8);
marble8.accelerate(5);

//Stap 8 check de speed van je eerste knikker
//console.log(marble1.speed);
// 6

// Stap 9 bereken gemiddelde snelheid van alle knikkers
// let sum = 0;
// for (let i = 0; i < marbles.length; i++) {
//   sum += marbles[i].speed;
// }
// console.log(sum / marbles.length);

//7.625
// reducemanier
function avgSpeedMarbles() {
  return (
    marbles.reduce((acc, marble) => (acc += marble.speed), 0) / marbles.length
  );
}

// console.log(avgSpeedMarbles());
//  7.625

// Stap 10 Totale snelheid van alle knikkers met een L in hun kleur
function speedL(arr) {
  return arr
    .filter((marble) => marble.color.includes("l"))
    .reduce((acc, marble) => (acc += marble.speed), 0);
}
// console.log(speedL(marbles));
// console log marbles als de filter juist is
// [
//     Marble {
//       color: 'purple',
//       diameter: 10,
//       speed: 6,
//       isTransparant: true
//     },
//     Marble {
//       color: 'yellow',
//       diameter: 15,
//       speed: 8,
//       isTransparant: true
//     },
//     Marble { color: 'teal', diameter: 6, speed: 8, isTransparant: false },
//     Marble { color: 'blue', diameter: 3, speed: 8, isTransparant: true },
//     Marble {
//       color: 'black',
//       diameter: 5,
//       speed: 5,
//       isTransparant: false
//     }
//   ]
// console.log(speedL(marbles));
// 35

//Stap 11 Gemiddelde grootte van de transparante knikkers
function averageTransparantBallSize(arr) {
  return arr
    .filter((marble) => marble.isTransparant)
    .reduce((acc, marble) => (acc += marble.speed), 0);
}
console.log(averageTransparantBallSize(marbles));
//controle voor reduce
// [
//     Marble {
//       color: 'purple',
//       diameter: 10,
//       speed: 6,
//       isTransparant: true
//     },
//     Marble {
//       color: 'yellow',
//       diameter: 15,
//       speed: 8,
//       isTransparant: true
//     },
//     Marble { color: 'red', diameter: 9, speed: 11, isTransparant: true },
//     Marble { color: 'blue', diameter: 3, speed: 8, isTransparant: true }
//   ]
// 33
