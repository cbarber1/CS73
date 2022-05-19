let seed = 0;

function setup() {
    createCanvas(2000, 2000);
    // '#679595'
    background('#679595');

    seed = int(random(1000000));

    randomSeed(seed);

    strokeWeight(50);
    fill('#ffde4a');
    ellipse(width/3, height/3, 1000);

    fill('#FF7777');
    strokeWeight(25);
    //noStroke();
    ellipse(width - 500, height - 500, 400);

}