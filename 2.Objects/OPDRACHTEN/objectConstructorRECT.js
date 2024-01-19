function rectangle(width, height, color) {
  this.width = width;
  this.height = height;
  this.color = color;
}

(rectangle.prototype.perimeter = function () {
  return this.width * 2 + this.height * 2;
}),
  (rectangle.prototype.surface = function () {
    return this.width * this.height;
  });

const rectangle1 = new rectangle(1, 2, "green");
const rectangle2 = new rectangle(3, 6, "yellow");
const rectangle3 = new rectangle(2, 5, "orange");
const rectangle4 = new rectangle(5, 4, "red");
const rectangle5 = new rectangle(7, 3, "blue");
const rectangle6 = new rectangle(6, 2, "black");

// console.log(rectangle1);
// console.log(rectangle2);
// console.log(rectangle3);
// console.log(rectangle4);
// console.log(rectangle5);
// console.log(rectangle6);

// rectangle { width: 1, height: 2, color: 'green' }
// rectangle { width: 3, height: 6, color: 'yellow' }
// rectangle { width: 2, height: 5, color: 'orange' }
// rectangle { width: 5, height: 4, color: 'red' }
// rectangle { width: 7, height: 3, color: 'blue' }
// rectangle { width: 6, height: 2, color: 'black' }

const rectangles = [
  rectangle1,
  rectangle2,
  rectangle3,
  rectangle4,
  rectangle5,
  rectangle6,
];

// console.log(rectangles);
// [
//     rectangle { width: 1, height: 2, color: 'green' },
//     rectangle { width: 3, height: 6, color: 'yellow' },
//     rectangle { width: 2, height: 5, color: 'orange' },
//     rectangle { width: 5, height: 4, color: 'red' },
//     rectangle { width: 7, height: 3, color: 'blue' },
//     rectangle { width: 6, height: 2, color: 'black' }
//   ]

// oef 1. geef mij het aantal squares dat in hun kleur de letter r bevatten

function colorR() {
  return rectangles.map(function (rectangle) {
    return rectangle.color;
  });
}

const arr = colorR();
const letterR = "r";
const subArr = arr.filter((str) => str.includes(letterR));
console.log(subArr.length);

// 3

// oef 2.  geef mij een html OL lijst met alle kleuren van onze rechthoeken (OL met meerdere LIs)

function generateHTML() {
  return `<ol>${rectangles
    .map(({ color }) => `<li>${color}</li>`)
    .join("")}<?ol>`;
}

// oef 3. print mij een array uit in console
// met alle oppervlaktes van de 6 rechthoeken

function allSurfaces() {
  return rectangles.map(function (opp) {
    return opp.surface();
  });
}
console.log(allSurfaces());

// [ 2, 18, 10, 20, 21, 12 ]
