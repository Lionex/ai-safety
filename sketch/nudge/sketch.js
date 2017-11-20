function nudge( p ) {

var x = 100;
var y = 100;

p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight)
}

p.draw = () => {
    p.ellipse(p.mouseX, p.mouseY, 20, 20)
}

p.mousePressed = () => {
    p.clear()
}

}

let p5_nudge = new p5(nudge)
