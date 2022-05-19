let seed = 0;

function setup() {
    createCanvas(2000, 2000);
    // '#679595'
    background('#fffaf1');

    seed = int(random(1000000));

    randomSeed(seed);

    strokeWeight(1);
    stroke(0);
    //noStroke();
    for (let i = 0; i < 50000; i++) {
        fill(random(reds.palette));
       // noFill();
       let  y = randomGaussian(height/2, 300);
       let x = randomGaussian(width/2, 300);
       while(x < 40 || x > (width - 40) 
            || y < 40 || y > (height - 40)) 
       {
            y = randomGaussian(height/2, 300);
            x = randomGaussian(width/2, 300);
       }
        
        let r = randomGaussian(2, 20);
        //let r2 = random(40);
        ellipse(x, y, r);
        fill(0, map(dist(width/2, height/2, x, y), 0, 900, 0, 255));
        ellipse(x, y, r)
    }
}