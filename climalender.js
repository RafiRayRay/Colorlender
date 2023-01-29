let temperatureData;
var w = 60;
var h = 60;
var startYear = 1970;
var endYear = 2021;

function preload() {
  loadTable("Bremen_Klima.csv", "csv", "header", (data) => {
            temperatureData = data;
        });
}

function setup() {

    let leinwand = createCanvas(12 * w, (endYear - startYear + 1) * h);
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

for (var i = 1970; i <= 2022; i++) {
  fill(0);
  textSize(30);
    text(i, 10, 50 * (i - 1970) + 50);

}
}
