function makeRectangle(width, height, color) {
  return {
    width: width,
    height: height,
    color: color,
    perimeter: function (width, height) {
      return width * 2 + height * 2;
    },
    surface: function (width, height) {
      return width * height;
    },
  };
}
const rectangle1 = makeRectangle(1, 2, "green");
const rectangle2 = makeRectangle(3, 6, "yellow");
const rectangle3 = makeRectangle(2, 5, "orange");
const rectangle4 = makeRectangle(5, 4, "red");
const rectangle5 = makeRectangle(7, 3, "blue");
const rectangle6 = makeRectangle(6, 2, "black");

console.log(rectangle1);
console.log(rectangle2);
console.log(rectangle3);
console.log(rectangle4);
console.log(rectangle5);
console.log(rectangle6);

// {
//     width: 1,
//     height: 2,
//     color: 'green',
//     perimeter: [Function: perimeter],
//     surface: [Function: surface]
//   }
//   {
//     width: 3,
//     height: 6,
//     color: 'yellow',
//     perimeter: [Function: perimeter],
//     surface: [Function: surface]
//   }
//   {
//     width: 2,
//     height: 5,
//     color: 'orange',
//     perimeter: [Function: perimeter],
//     surface: [Function: surface]
//   }
//   {
//     width: 5,
//     height: 4,
//     color: 'red',
//     perimeter: [Function: perimeter],
//     surface: [Function: surface]
//   }
//   {
//     width: 7,
//     height: 3,
//     color: 'blue',
//     perimeter: [Function: perimeter],
//     surface: [Function: surface]
//   }
//   {
//     width: 6,
//     height: 2,
//     color: 'black',
//     perimeter: [Function: perimeter],
//     surface: [Function: surface]
//   }
