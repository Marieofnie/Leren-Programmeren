// Maak een Object Constructor Broodje. Elk broodje heeft een naam, een lijst van ingrediënten en een boolean waarde isVegi.
// Zorg ervoor dat er ingrediënten kunnen worden toegevoegd en verwijderd. Een Ingrediënt heeft de volgende eigenschappen:
// - isVegi, naam, hoeveelheid, eenheid.
// Zorg ervoor dat je dus broodjes kan aanmaken en dat je dus al de ingredienten kan beheren. (toevoegen en verwijderen).
// Een vegi broodje kan geen niet-vegi ingredient krijgen.
// const allBroodjes = [new Broodje(),.....]
// schrijf een functie printMenu.
// <h2>Smos kaas (v)</h2>
// <ul>
//  <li>2 plakken kaas</li>
//  <li>3 blaadjes sla</li>
//  <li>5 sprieten wortel</li>
// </ul>
// <h2>martino</h2>
// <ul>
//  <li>1 pot prepare</li>
//  <li>2 stukken augurken</li>
//  <li>1 kwak mayo</li>
// </ul>
// <h2>Smos kaas (v)</h2>
// <ul>
//  <li>2 plakken kaas</li>
//  <li>3 blaadjes sla</li>
//  <li>5 sprieten wortel</li>
// </ul>
function Broodje(name, isVegi) {
  this.name = name;
  this.isVegi = isVegi;
  this.ingredients = [];
}

function Ingredient(isVegi, name, quantity, unit) {
  this.isVegi = isVegi;
  this.name = name;
  this.quantity = quantity;
  this.unit = unit;
}

Broodje.prototype.addIngredient = function (isVegi, name, quantity, unit) {
  if (this.isVegi && !isVegi) {
    throw `Dit broodje is vegetarisch`;
  } else {
    this.ingredients.push(new Ingredient(isVegi, name, quantity, unit));
  }
};

Broodje.prototype.removeIngredient = function (ingredient) {
  const index = this.ingredients.indexOf(ingredient);
  if (index > -1) {
    this.ingredients.splice(index, 1);
  }
};
const martino = new Broodje("Martino", false);
martino.addIngredient(false, "Prepare", 2, "lepels");
martino.addIngredient(true, "Martinosaus", 3, "kwakjes");
martino.addIngredient(true, "Ui", 5, "theelepels");
martino.addIngredient(true, "Augurk", 7, "plakjes");
martino.addIngredient(true, "Ei", 4, "schijfjes");

// console.log(martino);
// Broodje {name: 'Martino',isVegi: false,ingredients: [
//       Ingredient {isVegi: false,name: 'Prepare',quantity: 2,unit: 'lepels'},
//       Ingredient {isVegi: false,name: 'Martinosaus', quantity: 3,unit: 'kwakjes'},
//       Ingredient {isVegi: false, name: 'Ui',quantity: 5,unit: 'theelepels'},
//       Ingredient {isVegi: false,name: 'Augurk', quantity: 7, unit: 'plakjes'},
//       Ingredient { isVegi: false, name: 'Ei',quantity: 4,unit: 'schijfjes'}]}

const veggie = new Broodje("Veggie", true);
veggie.addIngredient(true, "Tapenade van zongedroogde tomaten", 2, "lepels");
veggie.addIngredient(true, "Parmezaan", 1, "handje vol");
veggie.addIngredient(true, "Olijf", 7, "stuks");
veggie.addIngredient(true, "Rucola", 5, "blaadjes");
veggie.addIngredient(true, "Balsamico", 2, "theelepels");

// console.log(veggie);
// Broodje {name: 'Veggie',isVegi: true,ingredients: [
//       Ingredient {isVegi: true, name: 'Tapenade van zongedroogde tomaten',quantity: 2, unit: 'lepels'},
//       Ingredient { isVegi: true,name: 'Parmezaan',quantity: 1,unit: 'handje vol' },
//       Ingredient {isVegi: true, name: 'Olijf',quantity: 7,unit: 'stuks'},
//       Ingredient {isVegi: true, name: 'Rucola',quantity: 5, unit: 'blaadjes'},
//       Ingredient {isVegi: true, name: 'Balsamico',quantity: 2,unit: 'theelepels'}]}

const smosKaas = new Broodje("Smos Kaas", true);
smosKaas.addIngredient(true, "Jonge Hollandse Kaas", 3, "sneetjes");
smosKaas.addIngredient(true, "Ei", 4, "schijfjes");
smosKaas.addIngredient(true, "Sla", 3, "blaadjes");
smosKaas.addIngredient(true, "Komkommer", 5, "schijfjes");
smosKaas.addIngredient(true, "Tomatten", 6, "schijfjes");

// console.log(smosKaas);
// Broodje {name: 'Smos Kaas',isVegi: true,ingredients: [
//       Ingredient {isVegi: true,name: 'Jonge Hollandse Kaas', quantity: 3,unit: 'sneetjes'},
//       Ingredient {isVegi: true,name: 'Ei', quantity: 4,unit: 'schijfjes' },
//       Ingredient {isVegi: true,name: 'Sla',quantity: 3,unit: 'blaadjes'},
//       Ingredient {isVegi: true,name: 'Komkommer', quantity: 5,unit: 'schijfjes'},
//       Ingredient { isVegi: true,name: 'Tomatten',quantity: 6,unit: 'schijfjes'}]}

const smosHesp = new Broodje("Smos Hesp", false);
smosHesp.addIngredient(false, "Hesp", 3, "sneetjes");
smosHesp.addIngredient(true, "Ei", 4, "schijfjes");
smosHesp.addIngredient(true, "Sla", 3, "blaadjes");
smosHesp.addIngredient(true, "Komkommer", 5, "schijfjes");
smosHesp.addIngredient(true, "Tomatten", 6, "schijfjes");

// console.log(smosHesp);
// Broodje {name: 'Smos Hesp',isVegi: false,ingredients: [
//       Ingredient {isVegi: false,name: 'Hesp',quantity: 3,unit: 'sneetjes'},
//       Ingredient {isVegi: true,name: 'Ei', quantity: 4,unit: 'schijfjes'},
//       Ingredient { isVegi: true,name: 'Sla',quantity: 3,unit: 'blaadjes'},
//       Ingredient {isVegi: true,name: 'Komkommer', quantity: 5, unit: 'schijfjes'},
//       Ingredient {isVegi: true,name: 'Tomatten',quantity: 6, unit: 'schijfjes'}]}

const broodjes = [martino, veggie, smosKaas, smosHesp];

function printMenu(broodjes) {
  let menu = "";
  broodjes.forEach(function (broodje) {
    if (broodje.isVegi) {
      menu += `<h2>${broodje.name} (v)</h2>`;
    } else {
      menu += `<h2>${broodje.name}</h2>`;
    }

    broodje.ingredients.forEach(function (ingredient) {
      menu += `<li>${ingredient.quantity} ${ingredient.unit} ${ingredient.name}</li>`;
    });
    menu += "</ul>";
  });
  return menu;
}


function getHTMLOutput(){
  return broodjes.map((b)=>`<h1>${b.naam} ${b.isVegi? (V): ""}</h1><ul>${b.ingredienten.map((i)=> `<li>${i.naam}} : ${i.hoeveelheid} ${i.eenheid}</li>).join("")).join("")} `)
}


// console.log(printMenu(broodjes));
/*<h2>Martino</h2>
<li>2 lepels Prepare</li>
<li>3 kwakjes Martinosaus</li>
<li>5 theelepels Ui</li>
<li>7 plakjes Augurk</li>
<li>4 schijfjes Ei</li>
</ul>
<h2>Veggie (v)</h2>
<li>2 lepels Tapenade van zongedroogde tomaten</li>
<li>1 handje vol Parmezaan</li>
<li>7 stuks Olijf</li>
<li>5 blaadjes Rucola</li>
<li>2 theelepels Balsamico</li>
</ul>
<h2>Smos Kaas (v)</h2>
<li>3 sneetjes Jonge Hollandse Kaas</li>
<li>4 schijfjes Ei</li>
<li>3 blaadjes Sla</li>
<li>5 schijfjes Komkommer</li>
<li>6 schijfjes Tomatten</li>
</ul>
<h2>Smos Hesp</h2>
<li>3 sneetjes Hesp</li>
<li>4 schijfjes Ei</li>
<li>3 blaadjes Sla</li>
<li>5 schijfjes Komkommer</li>
<li>6 schijfjes Tomatten</li>
</ul>*/
