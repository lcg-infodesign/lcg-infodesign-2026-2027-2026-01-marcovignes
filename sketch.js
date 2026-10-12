let xBarca = 0;
let yBarca = 230; 
let xSole = 600; 
let velocitaX = 1; 

function setup() {

  createCanvas(600, 400);
}

function draw() {
  background(135, 206, 235);
  noStroke();

  // 1. SOLE
  fill(255, 223, 0);
  circle(xSole, 80, 100); 

  // 2. MARE
  fill(28, 64, 114);
  rect(0, 220, 600, 180);

  // 3. BARCA
  fill(139, 69, 19);
  quad(
    xBarca, yBarca,      
    xBarca + 200, yBarca,   
    xBarca + 150, yBarca + 50,    
    xBarca + 50, yBarca + 50     
  );

  fill(50);
  rect(xBarca + 100, yBarca - 150, 4, 150); 

  fill(255);
  triangle(
    xBarca + 104, yBarca - 150,   
    xBarca + 104, yBarca - 20,   
    xBarca + 180, yBarca - 20
  );

  xBarca += velocitaX;

  if (xBarca + 200 > 600 || xBarca < 0) {
    velocitaX = -velocitaX; 
  }
  
  xSole -= 1;
  if (xSole < -100) { 
    xSole = 640;
  }
}
