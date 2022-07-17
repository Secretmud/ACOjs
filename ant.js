class Ant {
  constructor() {
    this.x = start_x;
    this.y = start_y;
    this.size = 3;
    this.speed = 4;
  }
  
  move() {

    let steps = []
    let sum = 0;
    /*
    for (let i = 0; i < pheremone.length; i++) {
        if (pheremone[i].x >= this.x - this.size/2 && 
            pheremone[i].x <= this.x + this.size/2) {
            steps.push(pheremone[i])
            sum += pheremone[i].strength;
        }
    }
    if (steps.length < 3) {
        for (let i = steps.length; i < 3; i++) {
            steps.push(pheremone.push(new Pheremone(this.x, this.y)))
            sum += 1
        }
    }
    let tmp = []
    for (let i = 0; i < steps.length; i++) {
        tmp.push(steps[i].strength/sum);
    }

    let move = Math.floor(Math.random() * steps.length);


    let x = steps[move].x + this.size/2; 
    let y = steps[move].y + this.size/2;
    */
    let x = random(-this.speed, this.speed); 
    let y = random(-this.speed, this.speed);

    if (this.x + x > 0 && this.x + x < windowWidth) {
      this.x += x;
    } else {
      this.x -= x;
    }
    if (this.y + y > 0 && this.y + y < windowHeight) {
      this.y += y;
    } else {
      this.y -= y;
    }
    let found = false;
    for (let i = 0; i < pheremone.length; i++) {
        if (pheremone[i].x >= this.x - this.size/2 && 
            pheremone[i].x <= this.x + this.size/2) {
            pheremone[i].strength += Math.sqrt((start_x-this.x)^2+(start_y-this.y)^2)
            found = true;
        }
    }
    if (!found)
        pheremone.push(new Pheremone(this.x, this.y))

  }
  
  display() {
    ellipse(this.x, this.y, this.size, this.size);
  }
}