function Weerstation(naam, provincie) {
  this.naam = naam;
  this.provincie = provincie;
  this.metingen = [];
}
function Meting(type, waarde, tijdstip) {
  this.type = type;
  this.waarde = waarde;
  this.tijdstip = tijdstip;
}
Weerstation.prototype.addMeting = function (type, waarde, tijdstip) {
  this.metingen.push(new Meting(type, waarde, tijdstip));
};

const stationOostende = new Weerstation("Oostende", "West-Vlaanderen");
const stationRansberg = new Weerstation("Ransberg", "Vlaams-Brabant");
const StationCourcelles = new Weerstation("Courcelles", "Henegouwen");

stationRansberg.addMeting("neerslag", 22, "2023-10-03 18:45");
stationRansberg.addMeting("neerslag", 50, "2023-11-05 17:38");
stationRansberg.addMeting("neerslag", 12, "2023-12-07 15:13");
stationRansberg.addMeting("temperatuur", 13, "2023-09-02 08:33");

stationOostende.addMeting("temperatuur", 18, "2023-07-15 19:33");
stationOostende.addMeting("temperatuur", 24, "2023-07-08 16:20");
stationOostende.addMeting("luchtdruk", 1011, "2023-07-03 15:30");
stationOostende.addMeting("temperatuur", 31, "2023-08-13 16:15");
stationOostende.addMeting("luchtdruk", 956, "2023-07-08 14:18");

stationCourcelles.addMeting("neerslag", 120, "2023-12-13 14:13");
stationCourcelles.addMeting("neerslag", 12, "2023-11-07 15:33");
stationCourcelles.addMeting("luchtdruk", 994, "2023-03-07 17:23");

Weerstation.prototype.getAvg(soort,month,eenheid) {
    if(soort != "neerslag" || soort !="temperatuur"|| soort !="luchtdruk"){ 
        throw "De parameter is fout of ontbreekt";
    } else if (month > 12 || month<0) {
        throw  "Er zijn maar 12 maanden in een jaar";
    } else { 
        
        console.log(this.metingen.filter((meting)=>meting[type].includes(soort)));
    }
};



