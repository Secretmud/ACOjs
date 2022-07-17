class Pheremone {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 1;
        this.time = 15;
        this.strength = 1;
    }

    update() {
        if (this.time > 0)
            this.time -= 1;
    }

    display() {
        ellipse(this.x, this.y, this.size, this.size);
    }

}