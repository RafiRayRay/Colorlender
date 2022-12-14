// globale Variablen für die URL der JSON-Datei und das JSON-Objekt
let button;
let loaded=false;
let jsonData;
let jahr; //=2020;
let monat; //=05;
let tag; //=01;
let j = jahr + "-";
let m = monat + "-";
let t = tag;
let api = "https://api.brightsky.dev/weather?lat=52&lon=7.6&date=";
let url = api + j + m + t;
let temperaturhöhe=0;

/* function preload() {

  //JSON
  var url = api+ j + m + t;
  brightsky  = loadJSON(url);
} */
function setup() {
  // lade die JSON-Datei beim Start des Programms
  // brigthsky = loadJSON(url,buttonPressed);
  createCanvas(400, 400);
  // Erstelle Slider für das Jahr, den Monat und das Datum
  jahrSlider = createSlider(2010, 2022, 2022);
  jahrSlider.position(20, 340);
  jahrSlider.style("width", "80px");

  monatSlider = createSlider(01, 12, 1);
  monatSlider.position(20, 360);
  monatSlider.style("width", "80px");

  tagSlider = createSlider(1, 31, 1);
  tagSlider.position(20, 380);
  tagSlider.style("width", "80px");
  // Erstelle den Button
  button = createButton("generieren");
  button.position(120, 340);
  button.size(100, 50);

  // Füge einen Klick-Handler hinzu
  button.mousePressed(buttonPressed);
}
function buttonPressed() {

  // Ändere den Pfad zur JSON-Datei
  jahr = jahrSlider.value();
  monat = monatSlider.value();
  tag = tagSlider.value();
  if (monat < 10) {
    m = "0" + monat;
  } else {
    m = monat;
  }
  if (tag < 10) {
    t = "0" + tag;
  } else {
    t = tag;
  }
  j = jahr;
  // m= monat
  // t=tag
  url = api + j + "-" + m + "-" + t;
  // Lade die neue JSON-Datei
    loadJSON(url,getTemperature);

}
function draw() {
  background(220);

  // Aktualisiere die Werte der Variablen "year", "month" und "date"
  // entsprechend den Werten der Slider

  jahr = jahrSlider.value();
  monat = monatSlider.value();
  tag = tagSlider.value();

drawKreis();

  fill(111);
  textSize(32);
  text(jahr, 300, height / 2);
  text(monat, 300, height / 2 + 32);
  text(tag, 300, height / 2 + 64);
  print("datum " + j, m, t);
  print("temperatur " + temperaturhöhe);
  print("url " + url);
}
function getTemperature(weather){
   temperaturhöhe = weather.weather[11].temperature ;
loaded = true;
print(temperaturhöhe);
}


function drawKreis(){
  if (loaded){
  if (temperaturhöhe > -10 && temperaturhöhe < 10) {
    fill(247, 240, 0);
  } else if (temperaturhöhe > 10 && temperaturhöhe < 20) {
    fill(247, 150, 0);
  } else if (temperaturhöhe > 20 && temperaturhöhe < 25) {
    fill(255, 90, 0);
  } else if (temperaturhöhe > 25 && temperaturhöhe < 30) {
    fill(255, 0, 0);
  }

  ellipse(width / 2, height / 2, temperaturhöhe * 10, temperaturhöhe * 10);
  } else text("bitte warten")
}
