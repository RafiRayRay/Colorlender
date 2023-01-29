//um die Quadrate richtig zu zeichnen braucht maan das
let canvasWidth = 1000;
let canvasHeight = 600;
let rectWidth = canvasWidth * 0.3;
let rectHeight = canvasHeight * 0.75;
let rectX = (canvasWidth - rectWidth) * 0.107;
let rectY = (canvasHeight - rectHeight) / 4;
let Amsel = canvasWidth * 0.925
let Drossel = canvasHeight * 0.75;
let Fink = (canvasWidth - Amsel) *8.33333333333333 ;
let Starr = (canvasHeight - Drossel) / 4;

let luden1 = false;
let luden2 = false;
let luden3 = false;
let luden4 = false;
let luden5 = false;
let luden6 = false;
let luden7 = false;
let luden8 = false;
let luden9 = false;
let luden10 = false;
let luden11 = false;
let luden12 = false;
let jsonData;
let johr; //=2020;
let monot; //=05;
let tog; //=01;
let u = johr + "-";
let n = monot + "-";
let g = tog;
let opi = "https://api.brightsky.dev/weather?lat=52&lon=7.6&date=";
let orl = opi + u + n + g;
let th = 0;

let jonuar;
let fobruar;
let morz;
let aprol;
let moi;
let joni;
let joli;
let aogust;
let september;
let oktobor;
let novombor;
let dozombor;
let start = true;
let cJan = false;
let cFeb = false;
let cMar = false;
let cApr = false;
let cMai = false;
let cJun = false;
let cJul = false;
let cAug = false;
let cSep = false;
let cOkt = false;
let cNov = false;
let cDez = false;
let button;
let loaded1 = false;
let loaded2 = false;
let loaded3 = false;
let loaded4 = false;
let loaded5 = false;
let loaded6 = false;
let loaded7 = false;
let loaded8 = false;
let loaded9 = false;
let loaded10 = false;
let loaded11 = false;
let loaded12 = false;
let jahr; //=2020;
let monat; //=05;
let tag; //=01;
let j = jahr + "-";
let m = monat + "-";
let t = tag;
let api = "https://api.brightsky.dev/weather?lat=52&lon=7.6&date=";
let url = api + j + m + t;
let temperaturhöhe = 0;

let januar;
let februar;
let marz;
let april;
let mai;
let juni;
let juli;
let august;
let soptember;
let oktober;
let november;
let dezember;

function setup() {
  // lade die JSON-Datei beim Start des Programms
  // brigthsky = loadJSON(url,buttonPressed);
  let canvas = createCanvas(canvasWidth, canvasHeight);
  // Erstelle Slider für das Jahr, den Monat und das Datum
  jahrSlider = createSlider(2010, 2022, 2022);
  jahrSlider.position(width * 0.52, height * 1.31);
  jahrSlider.style("width", "80px");
 laden();
  // Erstelle den Button
  button = createButton("colorlendarisieren");
  button.style('background-color', color(242,133,109));
  button.position( width * 0.50, height * 1.35);
  button.size(120, 50,15);

  // Füge einen Klick-Handler hinzu
  button.mousePressed(buttonPressed);
}
function laden() {
  // Ändere den Pfad zur JSON-Datei
let u=2022;
  // n= monot
  g = 15;

  let orl1 = opi + u + " - " + "01" + "-" + g;
  jonuar = loadJSON(orl1, c1);

  let orl2 = opi + u + "-" + "02" + "-" + g;
  fobruar = loadJSON(orl2, c2);

  let orl3 = opi + u + "-" + "03" + "-" + g;
  morz = loadJSON(orl3, c3);

  let orl4 = opi + u + "-" + "04" + "-" + g;
  aprol = loadJSON(orl4, c4);

  let orl5 = opi + u + "-" + "05" + "-" + g;
  moi = loadJSON(orl5, c5);

  let orl6 = opi + u + "-" + "06" + "-" + g;
  joni = loadJSON(orl6, c6);

  let orl7 = opi + u + "-" + "07" + "-" + g;
  joli = loadJSON(orl7, c7);

  let orl8 = opi + u + "-" + "08" + "-" + g;
  aogust = loadJSON(orl8, c8);

  let orl9 = opi + u + "-" + "09" + "-" + g;
  soptember = loadJSON(orl9, c9);

  let orl10 = opi + u + "-" + "10" + "-" + g;
  oktobor = loadJSON(orl10, c10);

  let orl11 = opi + u + "-" + "11" + "-" + g;
  novombor = loadJSON(orl11, c11);

  let orl12 = opi + u + "-" + "12" + "-" + g;
  dozombor = loadJSON(orl12, c12);
}
function c1(jonuar) {
  p1 = jonuar.weather[11].temperature;
  luden1 = true;
}
function c2(fobruar) {
  p2 = fobruar.weather[11].temperature;
  luden2 = true;
}
function c3(morz) {
  p3 = morz.weather[11].temperature;
  luden3 = true;
}
function c4(aprol) {
  p4 = aprol.weather[11].temperature;
  luden4 = true;
}
function c5(moi) {
  p5 = moi.weather[11].temperature;
  luden5 = true;
}
function c6(joni) {
  p6 = joni.weather[11].temperature;
  luden6 = true;
}
function c7(joli) {
  p7 = joli.weather[11].temperature;
  luden7 = true;
}
function c8(aogust) {
  p8 = aogust.weather[11].temperature;
  luden8 = true;
}
function c9(soptember) {
  p9 = soptember.weather[11].temperature;
  luden9 = true;
}
function c10(oktobor) {
  p10 = oktobor.weather[11].temperature;
  luden10 = true;
}
function c11(novombor) {
  p11 = novombor.weather[11].temperature;
  luden11 = true;
}
function c12(dozombor) {
  p12 = dozombor.weather[11].temperature;
  luden12 = true;
}
//wenn man den knopf drückt, dann wird der link der JSON datei geändert und geladen
function buttonPressed() {
  // Ändere den Pfad zur JSON-Datei
  jahr = jahrSlider.value();
  let j = jahr;
  // m= monat
  t = 15;

  let url1 = api + j + "-" + "01" + "-" + t;
  januar = loadJSON(url1, m1);

  let url2 = api + j + "-" + "02" + "-" + t;
  februar = loadJSON(url2, m2);

  let url3 = api + j + "-" + "03" + "-" + t;
  marz = loadJSON(url3, m3);

  let url4 = api + j + "-" + "04" + "-" + t;
  april = loadJSON(url4, m4);

  let url5 = api + j + "-" + "05" + "-" + t;
  mai = loadJSON(url5, m5);

  let url6 = api + j + "-" + "06" + "-" + t;
  juni = loadJSON(url6, m6);

  let url7 = api + j + "-" + "07" + "-" + t;
  juli = loadJSON(url7, m7);

  let url8 = api + j + "-" + "08" + "-" + t;
  august = loadJSON(url8, m8);

  let url9 = api + j + "-" + "09" + "-" + t;
  september = loadJSON(url9, m9);

  let url10 = api + j + "-" + "10" + "-" + t;
  oktober = loadJSON(url10, m10);

  let url11 = api + j + "-" + "11" + "-" + t;
  november = loadJSON(url11, m11);

  let url12 = api + j + "-" + "12" + "-" + t;
  dezember = loadJSON(url12, m12);
}
function m1(januar) {
  t1 = januar.weather[11].temperature;
  loaded1 = true;
}
function m2(februar) {
  t2 = februar.weather[11].temperature;
  loaded2 = true;
}
function m3(marz) {
  t3 = marz.weather[11].temperature;
  loaded3 = true;
}
function m4(april) {
  t4 = april.weather[11].temperature;
  loaded4 = true;
}
function m5(mai) {
  t5 = mai.weather[11].temperature;
  loaded5 = true;
}
function m6(juni) {
  t6 = juni.weather[11].temperature;
  loaded6 = true;
}
function m7(juli) {
  t7 = juli.weather[11].temperature;
  loaded7 = true;
}
function m8(august) {
  t8 = august.weather[11].temperature;
  loaded8 = true;
}
function m9(september) {
  t9 = september.weather[11].temperature;
  loaded9 = true;
}
function m10(oktober) {
  t10 = oktober.weather[11].temperature;
  loaded10 = true;
}
function m11(november) {
  t11 = november.weather[11].temperature;
  loaded11 = true;
}
function m12(dezember) {
  t12 = dezember.weather[11].temperature;
  loaded12 = true;
}

function draw() {
  background(248, 215, 200);

  // Aktualisiere die Werte der Variablen "year", "month" und "date"
  // entsprechend den Werten der Slider
  print(mouseX, mouseY, start);
  fill(242,133,109);
  textSize (120);
  text("2022", width *0.645, height * 0.98);

  jahr = jahrSlider.value();
  /*
 monat = monatSlider.value();
  tag = tagSlider.value();
*/

  if (start == true) {
    drawQuad(); //Die Quadrate (3x4)
  }

fill(111);
  textSize(28);
  text(johr, width *0.43, height * 0.88);
  text(monot, width - width * 0.8, height * 0.91);
  text(tog, width - width * 0.8, height * 0.93);
  print("datum " + u, n, g);
line(925,38,925,488);
  push();
noStroke();
fill(248,215,200);
  rect(925,-100,1000,1000);
 pop();
  //Die Werte von den Slidern
  fill(242,133,109)
  textSize(28);
  text(jahr, width * 0.195, height * 0.88);
  text(monat, width - width * 0.8, height * 0.91);
  text(tag, width - width * 0.8, height * 0.93);
  print("datum " + j, m, t);

  //wenn januar geclickt wird, wird cJan = true und dann if->cJan=true->cJanuar();, ....
  if (
    mouseX > 75 &&
    mouseX < 175 &&
    mouseY > 35 &&
    mouseY < 150 &&
    mouseIsPressed
  ) {
    cJan = true;
  }
  if (
    mouseX > 175 &&
    mouseX < 275 &&
    mouseY > 35 &&
    mouseY < 150 &&
    mouseIsPressed
  ) {
    cFeb = true;
  }
  if (
    mouseX > 275 &&
    mouseX < 375 &&
    mouseY > 35 &&
    mouseY < 150 &&
    mouseIsPressed
  ) {
    cMar = true;
  }
  if (
    mouseX > 75 &&
    mouseX < 175 &&
    mouseY > 150 &&
    mouseY < 260 &&
    mouseIsPressed
  ) {
    cApr = true;
  }
  if (
    mouseX > 175 &&
    mouseX < 275 &&
    mouseY > 150 &&
    mouseY < 260 &&
    mouseIsPressed
  ) {
    cMai = true;
  }
  if (
    mouseX > 275 &&
    mouseX < 375 &&
    mouseY > 150 &&
    mouseY < 260 &&
    mouseIsPressed
  ) {
    cJun = true;
  }
    if (
    mouseX > 75 &&
    mouseX < 175 &&
    mouseY > 260 &&
    mouseY < 370 &&
    mouseIsPressed
  ) {
    cJul = true;
  }
  if (
    mouseX > 175 &&
    mouseX < 275 &&
    mouseY > 260 &&
    mouseY < 370 &&
    mouseIsPressed
  ) {
    cAug = true;
  }
  if (
    mouseX > 275 &&
    mouseX < 375 &&
    mouseY > 260 &&
    mouseY < 370 &&
    mouseIsPressed
  ) {
    cSep = true;
  }
      if (
    mouseX > 75 &&
    mouseX < 175 &&
    mouseY > 370 &&
    mouseY < 487 &&
    mouseIsPressed
  ) {
    cOkt = true;
  }
  if (
    mouseX > 175 &&
    mouseX < 275 &&
    mouseY > 370 &&
    mouseY < 487 &&
    mouseIsPressed
  ) {
    cNov = true;
  }
  if (
    mouseX > 275 &&
    mouseX < 375 &&
    mouseY > 370 &&
    mouseY < 487 &&
    mouseIsPressed
  ) {
    cDez = true;
  }
  // new window
  if (cJan == true) {
    cJanuar();
  }
  if (cFeb == true) {
    cFebruar();
  }
  if (cMar == true) {
    cMarz();
  }
  if (cApr == true) {
    cApril();
  }
if (cMai == true) {
    cMaiM();
  }
  if (cJun == true) {
    cJuni();
  }
if (cJul == true) {
    cJuli();
  }
if (cAug == true) {
    cAugust();
  }
  if (cSep == true) {
    cSeptember();
  }
  if (cOkt == true) {
    cOktober();
  }
if (cNov == true) {
    cNovember();
  }
if (cDez == true) {
    cDezember();
  }




  //drawFläche();                //nur zum testen ob die quadrate richtig angeordnet sind
  text("back", 15, 50);
  if (
    mouseX > 10 &&
    mouseX < 50 &&
    mouseY > 10 &&
    mouseY < 50 &&
    mouseIsPressed
  ) {
    start = true;
    cJan = false;
    cFeb = false;
    cMar = false;
    cApr = false;
    cMai = false;
    cJun = false;
    cJul = false;
    cAug = false;
    cSep = false;
    cOkt = false;
    cNov = false;
    cDez = false;
  }
}
function cJanuar() {
  background(255, 0, 0);
  text("JANUAR", 150, 150);
  start = false;

}
function cFebruar() {
  background(0, 255, 0);
  text("FEBRUAR", 150, 150);
  start = false;
}
function cMarz() {
  background(0, 0, 255);
  text("MARZ", 150, 150);
  start = false;
}
function cApril() {
  background(255, 0, 0);
  text("April", 150, 150);
  start = false;
}
function cMaiM() {
  background(0, 255, 0);
  text("Mai", 150, 150);
  start = false;
}
function cJuni() {
  background(0, 0, 255);
  text("JUNI", 150, 150);
  start = false;
}
function cJuli() {
  background(255, 0, 0);
  text("JULI", 150, 150);
  start = false;
}
function cAugust() {
  background(0, 255, 0);
  text("AUGUST", 150, 150);
  start = false;
}
function cSeptember() {
  background(0, 0, 255);
  text("SEPTEMBER", 150, 150);
  start = false;
}
function cOktober() {
  background(255, 0, 0);
  text("OKTOBER", 150, 150);
  start = false;
}
function cNovember() {
  background(0, 255, 0);
  text("NOVEMBER", 150, 150);
  start = false;
}
function cDezember() {
  background(0, 0, 255);
  text("DEZEMBER", 150, 150);
  start = false;
}
function drawFläche() {
  fill(0, 0, 0, 100);
  rect(rectX, rectY, rectWidth, rectHeight);
}
function drawQuad() {
   // Zeichne die Quadrate
  //1
  if (luden1) {
    if (p1 < -10) {
      fill(121, 107, 158);
    } else if (p1 > -10 && p1 < -5) {
fill(99, 108, 146);
    } else if (p1 > -5 && p1 < 0) {
fill(106, 159, 180);
    } else if (p1 > 0 && p1 < 5) {
     fill(0, 122, 116);
    } else if (p1 > 5 && p1 < 10) {
      fill(119, 154, 50);
    } else if (p1 > 10 && p1 < 15) {
      fill(224, 200, 21);
    } else if (p1 > 15 && p1 < 20) {
      fill(255, 117, 31);
    } else if (p1 > 20 && p1 < 25) {
      fill(204, 78, 0);
    } else if (p1 > 30 && p1 < 35) {
      fill(175, 78, 8);
    } else if (p1 > 35) {
      fill(138, 25, 42);
    }
  }

  rect(Fink, Starr, Fink*1.16, Drossel / 4, 15);
  //2
  if (luden2) {
    if (p2 < -10) {
      fill(121, 107, 158);
    } else if (p2 > -10 && p2 < -5) {
fill(99, 108, 146);
    } else if (p2 > -5 && p2 < 0) {
fill(106, 159, 180);
    } else if (p2 > 0 && p2 < 5) {
     fill(10, 122, 116);
    } else if (p2 > 5 && p2 < 10) {
      fill(119, 154, 50);
    } else if (p2 > 10 && p2 < 15) {
      fill(224, 200, 21);
    } else if (p2 > 15 && p2 < 20) {
  fill(255, 117, 31);    } else if (p2 > 20 && p2 < 25) {
      fill(204, 78, 0);
    } else if (p2 > 30 && p2 < 35) {
      fill(175, 78, 8);
    } else if (p2 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(Fink*1.16, Starr, Fink *1.32, Drossel / 4, 15);
  //3
  if (luden3) {
    if (p3 < -10) {
      fill(121, 107, 158);
    } else if (p3 > -10 && p3 < -5) {
fill(99, 108, 146);
    } else if (p3 > -5 && p3 < 0) {
fill(106, 159, 180);
    } else if (p3 > 0 && p3 < 5) {
     fill(10, 122, 116);
    } else if (p3 > 5 && p3 < 10) {
      fill(119, 154, 50);
    } else if (p3 > 10 && p3 < 15) {
      fill(224, 200, 21);
    } else if (p3 > 15 && p3 < 20) {
  fill(255, 117, 31);    } else if (p3 > 20 && p3 < 25) {
      fill(204, 78, 0);
    } else if (p3 > 30 && p3 < 35) {
      fill(175, 78, 8);
    } else if (p3 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(Fink*1.32, Starr,Fink*1.48, Drossel / 4,15);
  //4
  if (luden4) {
    if (p4 < -10) {
      fill(121, 107, 158);
    } else if (p4 > -10 && p4 < -5) {
fill(99, 108, 146);
    } else if (p4 > -5 && p4 < 0) {
fill(106, 159, 180);
    } else if (p4 > 0 && p4 < 5) {
     fill(10, 122, 116);
    } else if (p4 > 5 && p4 < 10) {
      fill(119, 154, 50);
    } else if (p4 > 10 && p4 < 15) {
      fill(224, 200, 21);
    } else if (p4 > 15 && p4 < 20) {
  fill(255, 117, 31);    } else if (p4 > 20 && p4 < 25) {
      fill(204, 78, 0);
    } else if (p4 > 30 && p4 < 35) {
      fill(175, 78, 8);
    } else if (p4 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(Fink, Starr * 4, Fink*1.16, Drossel / 4,15);
  //5
  if (luden5) {
    if (p5 < -10) {
      fill(121, 107, 158);
    } else if (p5 > -10 && p5 < -5) {
fill(99, 108, 146);
    } else if (p5 > -5 && p5 < 0) {
fill(106, 159, 180);
    } else if (p5 > 0 && p5 < 5) {
     fill(10, 122, 116);
    } else if (p5 > 5 && p5 < 10) {
      fill(119, 154, 50);
    } else if (p5 > 10 && p5 < 15) {
      fill(224, 200, 21);
    } else if (p5 > 15 && p5 < 20) {
  fill(255, 117, 31);    } else if (p5 > 20 && p5 < 25) {
      fill(204, 78, 0);
    } else if (p5 > 30 && p5 < 35) {
      fill(175, 78, 8);
    } else if (p5 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(Fink*1.16, Starr * 4, Fink*1.32, Drossel / 4,15);
  //6
  if (luden6) {
    if (p6 < -10) {
      fill(121, 107, 158);
    } else if (p6 > -10 && p6 < -5) {
fill(99, 108, 146);
    } else if (p6 > -5 && p6 < 0) {
fill(106, 159, 180);
    } else if (p6 > 0 && p6 < 5) {
     fill(10, 122, 116);
    } else if (p6 > 5 && p6 < 10) {
      fill(119, 154, 50);
    } else if (p6 > 10 && p6 < 15) {
      fill(224, 200, 21);
    } else if (p6 > 15 && p6 < 20) {
  fill(255, 117, 31);    } else if (p6 > 20 && p6 < 25) {
      fill(204, 78, 0);
    } else if (p6 > 30 && p6 < 35) {
      fill(175, 78, 8);
    } else if (p6 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(Fink*1.32, Starr * 4, Fink*1.48, Drossel / 4,15);
  //7
  if (luden7) {
    if (p7 < -10) {
      fill(121, 107, 158);
    } else if (p7 > -10 && p7 < -5) {
fill(99, 108, 146);
    } else if (p7 > -5 && p7 < 0) {
fill(106, 159, 180);
    } else if (p7 > 0 && p7 < 5) {
     fill(10, 122, 116);
    } else if (p7 > 5 && p7 < 10) {
      fill(119, 154, 50);
    } else if (p7 > 10 && p7 < 15) {
      fill(224, 200, 21);
    } else if (p7 > 15 && p7 < 20) {
  fill(255, 117, 31);    } else if (p7 > 20 && p7 < 25) {
      fill(204, 78, 0);
    } else if (p7 > 30 && p7 < 35) {
      fill(175, 78, 8);
    } else if (p7 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(Fink, Starr * 7, Fink*1.16, Drossel / 4,15);
  //8
  if (luden8) {
    if (p8 < -10) {
      fill(121, 107, 158);
    } else if (p8 > -10 && p8 < -5) {
fill(99, 108, 146);
    } else if (p8 > -5 && p8 < 0) {
fill(106, 159, 180);
    } else if (p8 > 0 && p8 < 5) {
     fill(10, 122, 116);
    } else if (p8 > 5 && p8 < 10) {
      fill(119, 154, 50);
    } else if (p8 > 10 && p8 < 15) {
      fill(224, 200, 21);
    } else if (p8 > 15 && p8 < 20) {
  fill(255, 117, 31);    } else if (p8 > 20 && p8 < 25) {
      fill(204, 78, 0);
    } else if (p8 > 30 && p8 < 35) {
      fill(175, 78, 8);
    } else if (p8 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(Fink*1.16, Starr * 7, Fink*1.32, Drossel / 4,15);
  //9
  if (luden9) {
    if (p9 < -10) {
      fill(121, 107, 158);
    } else if (p9 > -10 && p9 < -5) {
fill(99, 108, 146);
    } else if (p9 > -5 && p9 < 0) {
fill(106, 159, 180);
    } else if (p9 > 0 && p9 < 5) {
     fill(10, 122, 116);
    } else if (p9 > 5 && p9 < 10) {
      fill(119, 154, 50);
    } else if (p9 > 10 && p9 < 15) {
      fill(224, 200, 21);
    } else if (p9 > 15 && p9 < 20) {
  fill(255, 117, 31);    } else if (p9 > 20 && p9 < 25) {
      fill(204, 78, 0);
    } else if (p9 > 30 && p9 < 35) {
      fill(175, 78, 8);
    } else if (p9 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(Fink*1.32, Starr * 7, Fink*1.48, Drossel / 4,15);
  //10
  if (luden10) {
    if (p10 < -10) {
      fill(121, 107, 158);
    } else if (p10 > -10 && p10 < -5) {
fill(99, 108, 146);
    } else if (p10 > -5 && p10 < 0) {
fill(106, 159, 180);
    } else if (p10 > 0 && p10 < 5) {
     fill(10, 122, 116);
    } else if (p10 > 5 && p10 < 10) {
      fill(119, 154, 50);
    } else if (p10 > 10 && p10 < 15) {
      fill(224, 200, 21);
    } else if (p10 > 15 && p10 < 20) {
  fill(255, 117, 31);    } else if (p10 > 20 && p10 < 25) {
      fill(204, 78, 0);
    } else if (p10 > 30 && p10 < 35) {
      fill(175, 78, 8);
    } else if (p10 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(Fink, Starr * 10, Fink*1.16, Drossel / 4,15);
  //11
  if (luden11) {
    if (p11 < -10) {
      fill(121, 107, 158);
    } else if (p11 > -10 && p11 < -5) {
fill(99, 108, 146);
    } else if (p11 > -5 && p11 < 0) {
fill(106, 159, 180);
    } else if (p11 > 0 && p11 < 5) {
     fill(10, 122, 116);
    } else if (p11 > 5 && p11 < 10) {
      fill(119, 154, 50);
    } else if (p11 > 10 && p11 < 15) {
      fill(224, 200, 21);
    } else if (p11 > 15 && p11 < 20) {
  fill(255, 117, 31);    } else if (p11 > 20 && p11 < 25) {
      fill(204, 78, 0);
    } else if (p11 > 30 && p11 < 35) {
      fill(175, 78, 8);
    } else if (p11 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(Fink*1.16, Starr * 10, Fink*1.32, Drossel / 4,15);
  //12
  if (luden12) {
    if (p12 < -10) {
      fill(121, 107, 158);
    } else if (p12 > -10 && p12 < -5) {
fill(99, 108, 146);
    } else if (p12 > -5 && p12 < 0) {
fill(106, 159, 180);
    } else if (p12 > 0 && p12 < 5) {
     fill(10, 122, 116);
    } else if (p12 > 5 && p12 < 10) {
      fill(119, 154, 50);
    } else if (p12 > 10 && p12 < 15) {
      fill(224, 200, 21);
    } else if (p12 > 15 && p12 < 20) {
  fill(255, 117, 31);    } else if (p12 > 20 && p12 < 25) {
      fill(204, 78, 0);
    } else if (p12 > 30 && p12 < 35) {
      fill(175, 78, 8);
    } else if (p12 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(Fink*1.32, Starr * 10, Fink*1.48, Drossel / 4,15);


  // Zeichne die Quadrate
  //1

  if (loaded1) {
    if (t1 < -10) {
      fill(121, 107, 158);
    } else if (t1 > -10 && t1 < -5) {
      fill(99, 108, 146);
    } else if (t1 > -5 && t1 < 0) {
      fill(106, 159, 180);
    } else if (t1 > 0 && t1 < 5) {
      fill(0, 122, 116);
    } else if (t1 > 5 && t1 < 10) {
      fill(119, 154, 50);
    } else if (t1 > 10 && t1 < 15) {
      fill(224, 200, 21);
    } else if (t1 > 15 && t1 < 20) {
      fill(255, 117, 31);
    } else if (t1 > 20 && t1 < 25) {
      fill(204, 78, 0);
    } else if (t1 > 30 && t1 < 35) {
      fill(175, 78, 8);
    } else if (t1 > 35) {
      fill(138, 25, 42);
    }
  }
strokeWeight(4);
stroke(248,215,200)
  rect(rectX, rectY, rectWidth / 3, rectHeight / 4, 20);
  //2
  if (loaded2) {
    if (t2 < -10) {
      fill(121, 107, 158);
    } else if (t2 > -10 && t2 < -5) {
      fill(99, 108, 146);
    } else if (t2 > -5 && t2 < 0) {
      fill(106, 159, 180);
    } else if (t2 > 0 && t2 < 5) {
      fill(10, 122, 116);
    } else if (t2 > 5 && t2 < 10) {
      fill(119, 154, 50);
    } else if (t2 > 10 && t2 < 15) {
      fill(224, 200, 21);
    } else if (t2 > 15 && t2 < 20) {
      fill(255, 117, 31);
    } else if (t2 > 20 && t2 < 25) {
      fill(204, 78, 0);
    } else if (t2 > 30 && t2 < 35) {
      fill(175, 78, 8);
    } else if (t2 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(rectWidth * 0.584, rectY, rectWidth / 3, rectHeight / 4, 20);
  //3
  if (loaded3) {
    if (t3 < -10) {
      fill(121, 107, 158);
    } else if (t3 > -10 && t3 < -5) {
      fill(99, 108, 146);
    } else if (t3 > -5 && t3 < 0) {
      fill(106, 159, 180);
    } else if (t3 > 0 && t3 < 5) {
      fill(10, 122, 116);
    } else if (t3 > 5 && t3 < 10) {
      fill(119, 154, 50);
    } else if (t3 > 10 && t3 < 15) {
      fill(224, 200, 21);
    } else if (t3 > 15 && t3 < 20) {
      fill(255, 117, 31);
    } else if (t3 > 20 && t3 < 25) {
      fill(204, 78, 0);
    } else if (t3 > 30 && t3 < 35) {
      fill(175, 78, 8);
    } else if (t3 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(0.918 * rectWidth, rectY, rectWidth / 3, rectHeight / 4, 20);
  //4
  if (loaded4) {
    if (t4 < -10) {
      fill(121, 107, 158);
    } else if (t4 > -10 && t4 < -5) {
      fill(99, 108, 146);
    } else if (t4 > -5 && t4 < 0) {
      fill(106, 159, 180);
    } else if (t4 > 0 && t4 < 5) {
      fill(10, 122, 116);
    } else if (t4 > 5 && t4 < 10) {
      fill(119, 154, 50);
    } else if (t4 > 10 && t4 < 15) {
      fill(224, 200, 21);
    } else if (t4 > 15 && t4 < 20) {
      fill(255, 117, 31);
    } else if (t4 > 20 && t4 < 25) {
      fill(204, 78, 0);
    } else if (t4 > 30 && t4 < 35) {
      fill(175, 78, 8);
    } else if (t4 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(rectX, rectY * 4, rectWidth / 3, rectHeight / 4, 20);
  //5
  if (loaded5) {
    if (t5 < -10) {
      fill(121, 107, 158);
    } else if (t5 > -10 && t5 < -5) {
      fill(99, 108, 146);
    } else if (t5 > -5 && t5 < 0) {
      fill(106, 159, 180);
    } else if (t5 > 0 && t5 < 5) {
      fill(10, 122, 116);
    } else if (t5 > 5 && t5 < 10) {
      fill(119, 154, 50);
    } else if (t5 > 10 && t5 < 15) {
      fill(224, 200, 21);
    } else if (t5 > 15 && t5 < 20) {
      fill(255, 117, 31);
    } else if (t5 > 20 && t5 < 25) {
      fill(204, 78, 0);
    } else if (t5 > 30 && t5 < 35) {
      fill(175, 78, 8);
    } else if (t5 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(0.584 * rectWidth, rectY * 4, rectWidth / 3, rectHeight / 4, 20);
  //6
  if (loaded6) {
    if (t6 < -10) {
      fill(121, 107, 158);
    } else if (t6 > -10 && t6 < -5) {
      fill(99, 108, 146);
    } else if (t6 > -5 && t6 < 0) {
      fill(106, 159, 180);
    } else if (t6 > 0 && t6 < 5) {
      fill(10, 122, 116);
    } else if (t6 > 5 && t6 < 10) {
      fill(119, 154, 50);
    } else if (t6 > 10 && t6 < 15) {
      fill(224, 200, 21);
    } else if (t6 > 15 && t6 < 20) {
      fill(255, 117, 31);
    } else if (t6 > 20 && t6 < 25) {
      fill(204, 78, 0);
    } else if (t6 > 30 && t6 < 35) {
      fill(175, 78, 8);
    } else if (t6 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(0.918 * rectWidth, rectY * 4, rectWidth / 3, rectHeight / 4, 20);
  //7
  if (loaded7) {
    if (t7 < -10) {
      fill(121, 107, 158);
    } else if (t7 > -10 && t7 < -5) {
      fill(99, 108, 146);
    } else if (t7 > -5 && t7 < 0) {
      fill(106, 159, 180);
    } else if (t7 > 0 && t7 < 5) {
      fill(10, 122, 116);
    } else if (t7 > 5 && t7 < 10) {
      fill(119, 154, 50);
    } else if (t7 > 10 && t7 < 15) {
      fill(224, 200, 21);
    } else if (t7 > 15 && t7 < 20) {
      fill(255, 117, 31);
    } else if (t7 > 20 && t7 < 25) {
      fill(204, 78, 0);
    } else if (t7 > 30 && t7 < 35) {
      fill(175, 78, 8);
    } else if (t7 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(rectX, rectY * 7, rectWidth / 3, rectHeight / 4, 20);
  //8
  if (loaded8) {
    if (t8 < -10) {
      fill(121, 107, 158);
    } else if (t8 > -10 && t8 < -5) {
      fill(99, 108, 146);
    } else if (t8 > -5 && t8 < 0) {
      fill(106, 159, 180);
    } else if (t8 > 0 && t8 < 5) {
      fill(10, 122, 116);
    } else if (t8 > 5 && t8 < 10) {
      fill(119, 154, 50);
    } else if (t8 > 10 && t8 < 15) {
      fill(224, 200, 21);
    } else if (t8 > 15 && t8 < 20) {
      fill(255, 117, 31);
    } else if (t8 > 20 && t8 < 25) {
      fill(204, 78, 0);
    } else if (t8 > 30 && t8 < 35) {
      fill(175, 78, 8);
    } else if (t8 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(0.584 * rectWidth, rectY * 7, rectWidth / 3, rectHeight / 4, 20);
  //9
  if (loaded9) {
    if (t9 < -10) {
      fill(121, 107, 158);
    } else if (t9 > -10 && t9 < -5) {
      fill(99, 108, 146);
    } else if (t9 > -5 && t9 < 0) {
      fill(106, 159, 180);
    } else if (t9 > 0 && t9 < 5) {
      fill(10, 122, 116);
    } else if (t9 > 5 && t9 < 10) {
      fill(119, 154, 50);
    } else if (t9 > 10 && t9 < 15) {
      fill(224, 200, 21);
    } else if (t9 > 15 && t9 < 20) {
      fill(255, 117, 31);
    } else if (t9 > 20 && t9 < 25) {
      fill(204, 78, 0);
    } else if (t9 > 30 && t9 < 35) {
      fill(175, 78, 8);
    } else if (t9 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(0.918 * rectWidth, rectY * 7, rectWidth / 3, rectHeight / 4, 20);
  //10
  if (loaded10) {
    if (t10 < -10) {
      fill(121, 107, 158);
    } else if (t10 > -10 && t10 < -5) {
      fill(99, 108, 146);
    } else if (t10 > -5 && t10 < 0) {
      fill(106, 159, 180);
    } else if (t10 > 0 && t10 < 5) {
      fill(10, 122, 116);
    } else if (t10 > 5 && t10 < 10) {
      fill(119, 154, 50);
    } else if (t10 > 10 && t10 < 15) {
      fill(224, 200, 21);
    } else if (t10 > 15 && t10 < 20) {
      fill(255, 117, 31);
    } else if (t10 > 20 && t10 < 25) {
      fill(204, 78, 0);
    } else if (t10 > 30 && t10 < 35) {
      fill(175, 78, 8);
    } else if (t10 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(rectX, rectY * 10, rectWidth / 3, rectHeight / 4, 20);
  //11
  if (loaded11) {
    if (t11 < -10) {
      fill(121, 107, 158);
    } else if (t11 > -10 && t11 < -5) {
      fill(99, 108, 146);
    } else if (t11 > -5 && t11 < 0) {
      fill(106, 159, 180);
    } else if (t11 > 0 && t11 < 5) {
      fill(10, 122, 116);
    } else if (t11 > 5 && t11 < 10) {
      fill(119, 154, 50);
    } else if (t11 > 10 && t11 < 15) {
      fill(224, 200, 21);
    } else if (t11 > 15 && t11 < 20) {
      fill(255, 117, 31);
    } else if (t11 > 20 && t11 < 25) {
      fill(204, 78, 0);
    } else if (t11 > 30 && t11 < 35) {
      fill(175, 78, 8);
    } else if (t11 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(0.584 * rectWidth, rectY * 10, rectWidth / 3, rectHeight / 4, 20);
  //12
  if (loaded12) {
    if (t12 < -10) {
      fill(121, 107, 158);
    } else if (t12 > -10 && t12 < -5) {
      fill(99, 108, 146);
    } else if (t12 > -5 && t12 < 0) {
      fill(106, 159, 180);
    } else if (t12 > 0 && t12 < 5) {
      fill(10, 122, 116);
    } else if (t12 > 5 && t12 < 10) {
      fill(119, 154, 50);
    } else if (t12 > 10 && t12 < 15) {
      fill(224, 200, 21);
    } else if (t12 > 15 && t12 < 20) {
      fill(255, 117, 31);
    } else if (t12 > 20 && t12 < 25) {
      fill(204, 78, 0);
    } else if (t12 > 30 && t12 < 35) {
      fill(175, 78, 8);
    } else if (t12 > 35) {
      fill(138, 25, 42);
    }
  }
  rect(0.918 * rectWidth, rectY * 10, rectWidth / 3, rectHeight / 4, 20);
}
