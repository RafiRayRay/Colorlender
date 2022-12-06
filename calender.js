var cals = [];
var cals_m=[];

let r;
function setup() {
	createCanvas(innerWidth,innerHeight);
	background(255);
	let w = int(innerWidth/220)
	let h = int(innerHeight/120)
	for(let i = -1; i<=1; i++){
		for(let j = -2; j<2; j++){
			cals.push(new Year_cal(innerWidth/2.0 + 60*i,innerHeight/2.0+60*j))
		}
	}
  
  
}

function draw() {
	background(255)
	cals.forEach(x=>x.display())
	cals_m.forEach(x=>x.display())

}

function mousePressed(){
	click(mouseX,mouseY)
}
	
function click(x,y){
	for(let i = 0 ; i < cals.length; i++){
		let prev = cals[i].on;
		cals[i].click(x,y)
		let curr = cals[i].on;
	}
}
  
  
  class Year_cal{
	constructor(x,y){
		this.x = x
		this.y = y
		this.on = false
		this.sc = 1
		this.guideLines = false;
	}
	
	click(x,y){
		if(dist(x,y,this.x,this.y)<25*this.sc ||
			 dist(x,y,this.x,this.y*this.sc)<25*this.sc ||
			 dist(x,y,this.x*this.sc+25,this.y*this.sc+25)<25*this.sc){
			this.on = !this.on
		}
	}
	
	display(){
		push()
		translate(this.x,this.y)
		scale(this.sc)
		noStroke()
      
		if(this.on){
          for(let i = -3; i<=3; i++){
		for(let j = -2; j<=2; j++){
          cals_m.push(new Month_cal(innerWidth/2.0 + 70*i,innerHeight/2.0+70*j))
        }
          }
          
		}else{
			fill(200)
        
		}		
		rect(0,0,50,50)
		endShape(CLOSE)	
		pop()
	}
}


 class Month_cal{
	constructor(x,y){
		this.x = x
		this.y = y
		this.on = false
		this.sc = 1
		this.guideLines = false;
	}
	
	
	display(){
		push()
		translate(this.x,this.y)
		scale(this.sc)
		noStroke()
        fill(0,255,255)
		rect(0,0,60,60,20)
		pop()
	}
}
