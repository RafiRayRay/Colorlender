let temperatureData;
let year;
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function setup(){
        createCanvas(800, 600);
     
        year = createSlider(1970, 2020, 1970);
        loadTable("Bremen_Klima.csv", "csv", "header", (data) => {
            temperatureData = data;
        });
    }
function draw(){
        if (temperatureData) {
            background(255);
             stroke(1);
          strokeWeight(0.6);
             textSize(18);
             text(`Year: ${year.value()}`, 20, 40);
          
for (let i = 0; i < 12; i++) {

  
  let selectedData = temperatureData.rows.find(row => {
    let month = (i+1).toString().padStart(2, "0");
                    return row.getString('date') === `15.${month}.${year.value()}`});


                 let x = (i % 3) * 120 + 100;
                let y =  floor(i / 3) * 120+100 ;
             
    // text(months[i], x , y );
               if (selectedData) {
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
           rect(x, y, 120, 120);
                }
               
            }
        }
    
    }
