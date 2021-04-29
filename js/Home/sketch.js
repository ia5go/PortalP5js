class Bubble {
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    //TODO: no futuro torcar esse movimento jitter por algo mais rebuscasdo, criar velocidade x e colocar uma aleatóriedade que mude a direação...
    // talvez, colocar um movimento que cresce e diminui dentro de um range, esse range fica sendo movimento horizontal
    this.x = this.x + random(-0.5,0.5);
    this.y--;
    if(this.y < 0){
      this.x = random(width);
      this.y = random(height, height+200);
    }
  }

  show() {
    stroke(255, 20, 147);
    strokeWeight(2);
    fill(255, 105, 180);
    ellipse(this.x, this.y, this.r * 2);
  }
}

let bubbles = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  for(let i = 0; i<40; i++ ){
    let x = random(width);
    let y = random(height, 2*height);
    let r = random(2, 5);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw() {
background(220);
for(let i = 0; i<bubbles.length; i++){
  bubbles[i].show();
  bubbles[i].move();
}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}