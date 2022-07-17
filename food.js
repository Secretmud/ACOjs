class Food {
    constructor() {
        this.amount = random(50, 150);
        let x =  random(0 + this.amount/2, width - this.amount/2)
        let y = random(0 + this.amount/2, height - this.amount/2)
        if (x + 40 != start_x || x - 40 != start_x)
            this.x = x
        else
            this.x = start_x/2;
        if (y + 40 != start_y || y - 40 != start_y)
            this.y = y
        else
            this.y = start_y/2;
        
        this.x = random(0 + this.amount/2, width - this.amount/2);
        this.y = random(0 + this.amount/2, height - this.amount/2);
    }

    display() {
        ellipse(this.x, this.y, this.amount, this.amount);
    }

    collision() {
        if (this.amount > 0) {
            this.amount -= 1;
        }
    }
}