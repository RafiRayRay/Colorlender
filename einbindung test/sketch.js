//um die Quadrate richtig zu zeichnen braucht maan das
let canvasWidth = 450;
let canvasHeight = 600;
let rectWidth = canvasWidth * 0.666666666666666;
let rectHeight = canvasHeight * 0.75;
let rectX = (canvasWidth - rectWidth) / 2;
let rectY = (canvasHeight - rectHeight) / 4;

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
let jsonData;
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
let sepember;
let oktober;
let november;
let dezember;
/* function preload() {
  
  //JSON
  var url = api+ j + m + t;
  brightsky  = loadJSON(url);
} */

function setup() {
  // lade die JSON-Datei beim Start des Programms
  // brigthsky = loadJSON(url,buttonPressed);
  createCanvas(canvasWidth, canvasHeight);
  // Erstelle Slider für das Jahr, den Monat und das Datum
  jahrSlider = createSlider(2010, 2022, 2022);
  jahrSlider.position(width*0.41, height * 0.88);
  jahrSlider.style("width", "80px");
/*
  monatSlider = createSlider(01, 12, 1);
  monatSlider.position(width - width * 0.9, height * 0.9);
  monatSlider.style("width", "80px");

  tagSlider = createSlider(1, 31, 1);
  tagSlider.position(width - width * 0.9, height * 0.92);
  tagSlider.style("width", "80px");
  
  
  */
  // Erstelle den Button
  button = createButton("generieren");
  button.position(width - width * 0.6, height * 0.91);
  button.size(100, 50);

  // Füge einen Klick-Handler hinzu
  button.mousePressed(buttonPressed);
}

//wenn man den knopf drückt, dann wird der link der JSON datei geändert und geladen
function buttonPressed() {
  // Ändere den Pfad zur JSON-Datei
  jahr = jahrSlider.value();
let j=jahr;
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
  background(220);

  // Aktualisiere die Werte der Variablen "year", "month" und "date"
  // entsprechend den Werten der Slider
  
  
  jahr = jahrSlider.value();
 /*
 monat = monatSlider.value();
  tag = tagSlider.value();
*/
  drawQuad(); //Die Quadrate (3x4)

  //Die Werte von den Slidern
  fill(111);
  textSize(28);
  text(jahr, width *0.43, height * 0.88);
  text(monat, width - width * 0.8, height * 0.91);
  text(tag, width - width * 0.8, height * 0.93);
  print("datum " + j, m, t);

  //drawFläche();                //nur zum testen ob die quadrate richtig angeordnet sind
}

function drawFläche() {
  fill(0, 0, 0, 100);
  rect(rectX, rectY, rectWidth, rectHeight);
}
function drawQuad() {
  // Zeichne die Quadrate
  //1

  if (loaded1) {
    if (t1 < -10) {
      fill(072, 061, 139);
    } else if (t1 > -10 && t1 < -5) {
      fill(0, 0, 205);
    } else if (t1 > -5 && t1 < 0) {
      fill(135, 206, 250);
    } else if (t1 > 0 && t1 < 5) {
      fill(127, 255, 212);
    } else if (t1 > 5 && t1 < 10) {
      fill(032, 178, 170);
    } else if (t1 > 10 && t1 < 15) {
      fill(154, 205, 050);
    } else if (t1 > 15 && t1 < 20) {
      fill(255, 215, 0);
    } else if (t1 > 20 && t1 < 25) {
      fill(255, 165, 0);
    } else if (t1 > 30 && t1 < 35) {
      fill(255, 069, 0);
    } else if (t1 > 35) {
      fill(255, 0, 0);
    }
  }

  rect(rectX, rectY, rectWidth / 3, rectHeight / 4);
  //2
  if (loaded2) {
    if (t2 < -10) {
      fill(072, 061, 139);
    } else if (t2 > -10 && t2 < -5) {
      fill(0, 0, 205);
    } else if (t2 > -5 && t2 < 0) {
      fill(135, 206, 250);
    } else if (t2 > 0 && t2 < 5) {
      fill(127, 255, 212);
    } else if (t2 > 5 && t2 < 10) {
      fill(032, 178, 170);
    } else if (t2 > 10 && t2 < 15) {
      fill(154, 205, 050);
    } else if (t2 > 15 && t2 < 20) {
      fill(255, 215, 0);
    } else if (t2 > 20 && t2 < 25) {
      fill(255, 165, 0);
    } else if (t2 > 30 && t2 < 35) {
      fill(255, 069, 0);
    } else if (t2 > 35) {
      fill(255, 0, 0);
    }
  }
  rect(rectWidth * 0.584, rectY, rectWidth / 3, rectHeight / 4);
  //3
  if (loaded3) {
    if (t3 < -10) {
      fill(072, 061, 139);
    } else if (t3 > -10 && t3 < -5) {
      fill(0, 0, 205);
    } else if (t3 > -5 && t3 < 0) {
      fill(135, 206, 250);
    } else if (t3 > 0 && t3 < 5) {
      fill(127, 255, 212);
    } else if (t3 > 5 && t3 < 10) {
      fill(032, 178, 170);
    } else if (t3 > 10 && t3 < 15) {
      fill(154, 205, 050);
    } else if (t3 > 15 && t3 < 20) {
      fill(255, 215, 0);
    } else if (t3 > 20 && t3 < 25) {
      fill(255, 165, 0);
    } else if (t3 > 30 && t3 < 35) {
      fill(255, 069, 0);
    } else if (t3 > 35) {
      fill(255, 0, 0);
    }
  }
  rect(0.918 * rectWidth, rectY, rectWidth / 3, rectHeight / 4);
  //4
  if (loaded4) {
    if (t4 < -10) {
      fill(072, 061, 139);
    } else if (t4 > -10 && t4 < -5) {
      fill(0, 0, 205);
    } else if (t4 > -5 && t4 < 0) {
      fill(135, 206, 250);
    } else if (t4 > 0 && t4 < 5) {
      fill(127, 255, 212);
    } else if (t4 > 5 && t4 < 10) {
      fill(032, 178, 170);
    } else if (t4 > 10 && t4 < 15) {
      fill(154, 205, 050);
    } else if (t4 > 15 && t4 < 20) {
      fill(255, 215, 0);
    } else if (t4 > 20 && t4 < 25) {
      fill(255, 165, 0);
    } else if (t4 > 30 && t4 < 35) {
      fill(255, 069, 0);
    } else if (t4 > 35) {
      fill(255, 0, 0);
    }
  }
  rect(rectX, rectY * 4, rectWidth / 3, rectHeight / 4);
  //5
  if (loaded5) {
    if (t5 < -10) {
      fill(072, 061, 139);
    } else if (t5 > -10 && t5 < -5) {
      fill(0, 0, 205);
    } else if (t5 > -5 && t5 < 0) {
      fill(135, 206, 250);
    } else if (t5 > 0 && t5 < 5) {
      fill(127, 255, 212);
    } else if (t5 > 5 && t5 < 10) {
      fill(032, 178, 170);
    } else if (t5 > 10 && t5 < 15) {
      fill(154, 205, 050);
    } else if (t5 > 15 && t5 < 20) {
      fill(255, 215, 0);
    } else if (t5 > 20 && t5 < 25) {
      fill(255, 165, 0);
    } else if (t5 > 30 && t5 < 35) {
      fill(255, 069, 0);
    } else if (t5 > 35) {
      fill(255, 0, 0);
    }
  }
  rect(0.584 * rectWidth, rectY * 4, rectWidth / 3, rectHeight / 4);
  //6
  if (loaded6) {
    if (t6 < -10) {
      fill(072, 061, 139);
    } else if (t6 > -10 && t6 < -5) {
      fill(0, 0, 205);
    } else if (t6 > -5 && t6 < 0) {
      fill(135, 206, 250);
    } else if (t6 > 0 && t6 < 5) {
      fill(127, 255, 212);
    } else if (t6 > 5 && t6 < 10) {
      fill(032, 178, 170);
    } else if (t6 > 10 && t6 < 15) {
      fill(154, 205, 050);
    } else if (t6 > 15 && t6 < 20) {
      fill(255, 215, 0);
    } else if (t6 > 20 && t6 < 25) {
      fill(255, 165, 0);
    } else if (t6 > 30 && t6 < 35) {
      fill(255, 069, 0);
    } else if (t6 > 35) {
      fill(255, 0, 0);
    }
  }
  rect(0.918 * rectWidth, rectY * 4, rectWidth / 3, rectHeight / 4);
  //7
  if (loaded7) {
    if (t7 < -10) {
      fill(072, 061, 139);
    } else if (t7 > -10 && t7 < -5) {
      fill(0, 0, 205);
    } else if (t7 > -5 && t7 < 0) {
      fill(135, 206, 250);
    } else if (t7 > 0 && t7 < 5) {
      fill(127, 255, 212);
    } else if (t7 > 5 && t7 < 10) {
      fill(032, 178, 170);
    } else if (t7 > 10 && t7 < 15) {
      fill(154, 205, 050);
    } else if (t7 > 15 && t7 < 20) {
      fill(255, 215, 0);
    } else if (t7 > 20 && t7 < 25) {
      fill(255, 165, 0);
    } else if (t7 > 30 && t7 < 35) {
      fill(255, 069, 0);
    } else if (t7 > 35) {
      fill(255, 0, 0);
    }
  }
  rect(rectX, rectY * 7, rectWidth / 3, rectHeight / 4);
  //8
  if (loaded8) {
    if (t8 < -10) {
      fill(072, 061, 139);
    } else if (t8 > -10 && t8 < -5) {
      fill(0, 0, 205);
    } else if (t8 > -5 && t8 < 0) {
      fill(135, 206, 250);
    } else if (t8 > 0 && t8 < 5) {
      fill(127, 255, 212);
    } else if (t8 > 5 && t8 < 10) {
      fill(032, 178, 170);
    } else if (t8 > 10 && t8 < 15) {
      fill(154, 205, 050);
    } else if (t8 > 15 && t8 < 20) {
      fill(255, 215, 0);
    } else if (t8 > 20 && t8 < 25) {
      fill(255, 165, 0);
    } else if (t8 > 30 && t8 < 35) {
      fill(255, 069, 0);
    } else if (t8 > 35) {
      fill(255, 0, 0);
    }
  }
  rect(0.584 * rectWidth, rectY * 7, rectWidth / 3, rectHeight / 4);
  //9
  if (loaded9) {
    if (t9 < -10) {
      fill(072, 061, 139);
    } else if (t9 > -10 && t9 < -5) {
      fill(0, 0, 205);
    } else if (t9 > -5 && t9 < 0) {
      fill(135, 206, 250);
    } else if (t9 > 0 && t9 < 5) {
      fill(127, 255, 212);
    } else if (t9 > 5 && t9 < 10) {
      fill(032, 178, 170);
    } else if (t9 > 10 && t9 < 15) {
      fill(154, 205, 050);
    } else if (t9 > 15 && t9 < 20) {
      fill(255, 215, 0);
    } else if (t9 > 20 && t9 < 25) {
      fill(255, 165, 0);
    } else if (t9 > 30 && t9 < 35) {
      fill(255, 069, 0);
    } else if (t9 > 35) {
      fill(255, 0, 0);
    }
  }
  rect(0.918 * rectWidth, rectY * 7, rectWidth / 3, rectHeight / 4);
  //10
  if (loaded10) {
    if (t10 < -10) {
      fill(072, 061, 139);
    } else if (t10 > -10 && t10 < -5) {
      fill(0, 0, 205);
    } else if (t10 > -5 && t10 < 0) {
      fill(135, 206, 250);
    } else if (t10 > 0 && t10 < 5) {
      fill(127, 255, 212);
    } else if (t10 > 5 && t10 < 10) {
      fill(032, 178, 170);
    } else if (t10 > 10 && t10 < 15) {
      fill(154, 205, 050);
    } else if (t10 > 15 && t10 < 20) {
      fill(255, 215, 0);
    } else if (t10 > 20 && t10 < 25) {
      fill(255, 165, 0);
    } else if (t10 > 30 && t10 < 35) {
      fill(255, 069, 0);
    } else if (t10 > 35) {
      fill(255, 0, 0);
    }
  }
  rect(rectX, rectY * 10, rectWidth / 3, rectHeight / 4);
  //11
  if (loaded11) {
    if (t11 < -10) {
      fill(072, 061, 139);
    } else if (t11 > -10 && t11 < -5) {
      fill(0, 0, 205);
    } else if (t11 > -5 && t11 < 0) {
      fill(135, 206, 250);
    } else if (t11 > 0 && t11 < 5) {
      fill(127, 255, 212);
    } else if (t11 > 5 && t11 < 10) {
      fill(032, 178, 170);
    } else if (t11 > 10 && t11 < 15) {
      fill(154, 205, 050);
    } else if (t11 > 15 && t11 < 20) {
      fill(255, 215, 0);
    } else if (t11 > 20 && t11 < 25) {
      fill(255, 165, 0);
    } else if (t11 > 30 && t11 < 35) {
      fill(255, 069, 0);
    } else if (t11 > 35) {
      fill(255, 0, 0);
    }
  }
  rect(0.584 * rectWidth, rectY * 10, rectWidth / 3, rectHeight / 4);
  //12
  if (loaded12) {
    if (t12 < -10) {
      fill(072, 061, 139);
    } else if (t12 > -10 && t12 < -5) {
      fill(0, 0, 205);
    } else if (t12 > -5 && t12 < 0) {
      fill(135, 206, 250);
    } else if (t12 > 0 && t12 < 5) {
      fill(127, 255, 212);
    } else if (t12 > 5 && t12 < 10) {
      fill(032, 178, 170);
    } else if (t12 > 10 && t12 < 15) {
      fill(154, 205, 050);
    } else if (t12 > 15 && t12 < 20) {
      fill(255, 215, 0);
    } else if (t12 > 20 && t12 < 25) {
      fill(255, 165, 0);
    } else if (t12 > 30 && t12 < 35) {
      fill(255, 069, 0);
    } else if (t12 > 35) {
      fill(255, 0, 0);
    }
  }
  rect(0.918 * rectWidth, rectY * 10, rectWidth / 3, rectHeight / 4);
}
