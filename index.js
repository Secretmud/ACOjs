//const p5 = require('p5');
//const data = new p5();

var start_x = 0;
var start_y = 0;
var width = 0;
var height = 0;
var ants = []
var food = []
var pheremone = []

var ant_count = document.getElementById("ants");
var food_count = document.getElementById("food");


function setup() { 
    height = windowHeight;
    width = windowWidth;
    start_y = height/2;
    start_x = width/2;
    createCanvas(width, height);

    for (let i = 0; i < 150; i++) {
        ants.push(new Ant());
    }
    let food_sum = 0;
    for (let i = 0; i < 4; i++) {
        food.push(new Food());
        food_sum += food[i].amount;
    }
    ant_count.innerText = ants.length;
    food_count.innerText = food_sum;
}

function draw() {
    background(240);
    let food_sum = 0;
    for (let i = 0; i < food.length; i++) {
        food[i].display();
        if (food[i].amount <= 0) {
            food.splice(i,i)
        }
        food_sum += food[i].amount;
    }
    for (let i = 0; i < ants.length; i++) {
        ants[i].move();
        ants[i].display();
        for (let x = 0; x < food.length; x++) {
            if (ants[i].x > food[x].x - food[x].amount/2 && 
                ants[i].x < food[x].x + food[x].amount/2 &&
                ants[i].y > food[x].y - food[x].amount/2 &&
                ants[i].y < food[x].y + food[x].amount/2) {
                food[x].collision();
                food[x].display();
            }
        }

    }
    //ellipse(start_x, start_y, 15, 15);
    food_count.innerText = food_sum;
    console.log(pheremone.length)
}