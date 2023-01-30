let temperatureData;
var c =60;
var w = c;
var h = c;
var startYear = 1890;
var endYear = 2021;

function preload() {
  loadTable("assetsCLIMA/Bremen_KlimaH.csv", "csv", "header", (data) => {
            temperatureData = data;
        });
  fredoka = loadFont('assetsCLIMA/fredoka.ttf');

}

function setup() {

   createCanvas(12 * w, (endYear - startYear + 1) * h);
    noStroke();

   if(temperatureData){
    for (var y = startYear; y <= endYear; y++) {
        for (var x = 0; x < 12; x++) {
        let selectedData = temperatureData.rows.find(row => {
    let month = (x+1).toString().padStart(2, "0");
                    return row.getString('date') === `15.${month}.${y}`});
        if(selectedData){
            let temperature = selectedData.getNum("temp");

              if (temperature <= -10) {
       fill(121, 107, 158);
    } else if (temperature > -10 && temperature <= -5) {
       fill(99, 108, 146);
    } else if (temperature > -5 && temperature <= 0) {
       fill(106, 159, 180);
    } else if (temperature > 0 && temperature <= 5) {
       fill(0, 122, 116);
    } else if (temperature > 5 && temperature <= 10) {
       fill(119, 154, 50);
    } else if (temperature > 10 && temperature <= 15) {
       fill(224, 200, 21);
    } else if (temperature > 15 && temperature <= 20) {
       fill(255, 117, 31);
    } else if (temperature > 20 && temperature <= 25) {
       fill(204, 78, 0);
    } else if (temperature > 25 && temperature <= 35) {
       fill(175, 78, 8);
    } else if (temperature > 35) {
       fill(138, 25, 42);
    }

            rect(x * w, (y - startYear) * h, w, h);

        }
        }
    }
}

for (var i = 1890; i <= 2022; i++) {
  fill(255,114,86);
  textFont(fredoka);
  textSize(25);
    text(i, 0, (i - 1890 + 1) * h - (h / 2));

}
}
function draw(){


}
