// STREBERS
//geef elk vlak een x y waarde ( een positie op een vlak) y naar rechts xboven 0functie
// waarheen 2 squares kunnen gestuurd worden
// en de functie antwoord of ze elkaar raken of niet

function rectangle(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.color = color;
  this.x = x;
  this.y = y;
}

(rectangle.prototype.perimeter = function () {
  return this.width * 2 + this.height * 2;
}),
  (rectangle.prototype.surface = function () {
    return this.width * this.height;
  });

const rectangle1 = new rectangle(1, 2, "green", 50, 4);
const rectangle2 = new rectangle(3, 6, "yellow", 25, 42);
const rectangle3 = new rectangle(2, 5, "orange", 30, 31);
const rectangle4 = new rectangle(5, 4, "red", 40, 29);
const rectangle5 = new rectangle(7, 3, "blue", 16, 30);
const rectangle6 = new rectangle(6, 2, "black", 28, 15);

//  function whereAreYou (x, (x+this.height), y,(y+this.width)){

// }
