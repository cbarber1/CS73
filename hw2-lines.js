let seed = 0;

function setup() {
    createCanvas(2000, 2000);
    // '#679595'
    background('#e6d29b');

    seed = int(random(1000000));

    randomSeed(seed);

    strokeWeight(500);
    stroke('#472a4c');
    line(0, 0, width, height);

    stroke('#8ba26c');
    strokeWeight(205);
    //noStroke();
    line(-50, height/2, width + 20, 20);

}