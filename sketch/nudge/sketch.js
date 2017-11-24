function nudge( p ) {

// Draw a 2D vector
function draw_vec2(v, c) {
    p.line(c[0], c[1], c[0] + v[0], c[1] + v[1])
}

// Container for the set of vectors which represent words in this visualization
let vectors = [];

p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight)

    for (var i = 0; i < 100; i++) {
        // Create normalized vectors pulled from a random uniform distribution,
        // counts as random initialization of the network
        let x = Math.random() * 2 - 1
        let y = Math.random() * 2 - 1

        let magnitude = Math.sqrt(x*x+y*y)

        vectors.push([x, y].map((i) => i/magnitude))
    }
}

p.draw = () => {
    // Center position/maximum ellipse radius
    let c = [window.innerWidth/2, window.innerHeight/2]

    // size factor based on the window shape
    let size_factor = Math.min(c[0], c[1]) * (3 / 4)

    let max_size = vectors
        .map((a) => Math.sqrt(a[0]*a[0]+a[1]*a[1]))
        .reduce((a,b) => Math.max(a,b))

    p.translate(c[0],c[1])
    // Draw vectors from the center
    vectors.map((v) => {
        // resize the normalized vectors to the desired size before drawing them
        // from the given position c
        draw_vec2(v.map((i) => i*size_factor/max_size), [0,0])
    })
}

p.mousePressed = () => {

}

p.mouseReleased = () => {

}

}

let p5_nudge = new p5(nudge)
