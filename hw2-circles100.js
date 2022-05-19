let seed = 0;

function setup() {
    createCanvas(2000, 2000);
    // '#679595'
    background('#010042');

    seed = int(random(1000000));

    randomSeed(seed);

    strokeWeight(1);
    stroke(0);
    //noStroke();
    for (let i = 0; i < 100; i++) {
        fill(random(flick.palette) + "66");
       // noFill();
        let y = random(100, height-100);
        ellipse(random(100, width - 100), y, random(400));
    }
}