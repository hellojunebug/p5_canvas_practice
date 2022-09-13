const s2 = (sketch) => {
  sketch.setup = () => {
    sketch.createCanvas(100,100);
    sketch.background(150);
  }
}
new p5(s2, document.getElementById('center-canvas'))


const s3 = (sketch) => {
  var parentDim = document.getElementById('center-canvas-programmatic');
  var cnv;
  console.log(parentDim)
  console.log(document)

  sketch.setup = () => {
    cnv = sketch.createCanvas(100, 100);
    var x = (parentDim.width) / 2;
    var y = (parentDim.height) / 2;
    cnv.center();
  }

  sketch.draw = () => {
    sketch.background(150);
  };

  sketch.windowResized = () => {
    cnv.center();
  }

}

new p5(s3, document.getElementById('center-canvas-programmatic'))
