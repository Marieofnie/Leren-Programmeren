function Marblebag(color, size, material, marbles) {
  this.color = color;
  this.size = size;
  this.material = material;
  this.marbles = [];
}

function Marble(color, diameter, isTransparant) {
  this.color = color;
  this.diameter = diameter;
  this.speed = 0;
  this.isTransparant = isTransparant;
}

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

Marblebag.prototype.add = function (color, diameter, isTransparant) {
  this.marbles.push(new Marble(color, diameter, isTransparant));
};

Marblebag.prototype.lose = function (marble) {
  const index = this.marbles.indexOf(marble);
  if (index > -1) {
    this.marbles.splice(index, 1);
  }
};

const knikkerZak1 = new Marblebag("Bruin", "Klein", "Plastiek");
const knikkerZak2 = new Marblebag("Wit", "Groot", "Jutte");
const knikkerZak3 = new Marblebag("Rood", "Klein", "Rommel");

// console.log(KnikkerZak1);
// Marblebag {
//     color: 'Bruin',
//     size: 'Klein',
//     material: 'Plastiek',
//     marble: undefined
//   }

knikkerZak1.add("purple", 10, true);
console.log(knikkerZak1);

// Marblebag {
//   color: 'Bruin',
//   size: 'Klein',
//   material: 'Plastiek',
//   marbles: [
//     Marble {
//       color: 'purple',
//       diameter: 10,
//       speed: 0,
//       isTransparant: true
//     }
//   ]
// }
