function Winkelmand(naam, producten) {
  this.naam = naam;
  this.producten = [];
}
function Product(naam, hoeveelheid, prijs) {
  this.naam = naam;
  this.hoeveelheid = hoeveelheid;
  this.prijs = prijs;
}
Winkelmand.prototype.toevoegen = function (naam, hoeveelheid, prijs) {
  this.producten.push(new Product(naam, hoeveelheid, prijs));
};

const winkelmand1 = new Winkelmand("Mijn boodschappen");
// console.log(winkelmand1);
winkelmand1.toevoegen("Apple iPhone 15 512GB Zwart", 1, 1349);
winkelmand1.toevoegen("GoPro HERO 10 Black ", 2, 299);
winkelmand1.toevoegen("DJI Mini 4 Pro + Remote Controller ", 1, 799);
winkelmand1.toevoegen("Makita DHP485SFJ", 2, 219);
winkelmand1.toevoegen("Gardena SILENO minimo 250", 1, 669);
// console.log(winkelmand1);
// const winkelmanden = [winkelmand1];

function totalWinkelmand(obj) {
  return obj.producten.reduce(
    (acc, producten) => (acc += producten.prijs * producten.hoeveelheid),
    0
  );
}
// console.log(totalWinkelmand(winkelmand1));
//3853

function eenNaDuurste(obj) {
  return obj.producten.sort(function (a, b) {
    return b.prijs - a.prijs;
  });
}

// const eennaduurste = eenNaDuurste(winkelmand1)[1];

// console.log(eennaduurste.prijs);
//799

function filterMultiple(obj) {
  return obj.producten.filter((producten) => producten.hoeveelheid > 1);
  // .reduce((acc, producten) => (acc += producten.prijs), 0);
}
console.log(filterMultiple(winkelmand1));
// 518
