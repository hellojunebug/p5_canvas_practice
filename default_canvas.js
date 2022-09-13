
const s1 = (sketch) => {

  sketch.setup = () => {
    sketch.createCanvas(100, 100);
    sketch.background(150)
  }

}

new p5(s1, document.getElementById('default-canvas'))
