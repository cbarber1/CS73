let seed = 0;

function setup() {
    createCanvas(2000, 2000);
    background(0);

    seed = int(random(1000000));

    randomSeed(seed);
    let r = 800;

    translate(width/2, height/2);


    let offset = 0;

    for (let i = 0; i < 100000; i++) {
        let rand = random(2*PI);
        stroke('#b83a3e22');
        strokeWeight(.15);
        line(r*cos(rand) + random(-offset, offset), r*sin(rand) + random(-offset, offset), 
        random(-width/1.2), random(height));
    }

}