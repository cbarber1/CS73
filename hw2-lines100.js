let seed = 0;

function setup() {
    let canvas = createCanvas(2000, 2000);
    let ctx = canvas.elt.getContext('2d');
    background('#fffaf1');
    b1 = '#fffaf1';
    b2 = '#202020';

    seed = int(random(1000000));

    randomSeed(seed);
    let r = 800;

    // Adding a background gradient 

    // var grd = ctx.createLinearGradient(0, 0, width + 100, height + 100);
    // grd.addColorStop(0, "#503c47");
    // grd.addColorStop(1, "#5e7c8d");
    // // Fill with gradient
    // ctx.fillStyle = grd;
    // ctx.fillRect(0, 0, width, height);

    translate(width/2, height/2);


    let offset = 0;

    rotate(PI/2)
    for (let i = 0; i < 100; i++) {
        let rand = map(i, 0, 99, 0, PI);
        let rand2 = -rand;
        stroke(0);
        strokeWeight(5);
        line(800*cos(rand) + random(-offset, offset), 800*sin(rand) + random(-offset, offset), 
        800*cos(rand2) + random(-offset, offset), 800*sin(rand2) + random(-offset, offset))
    }

}