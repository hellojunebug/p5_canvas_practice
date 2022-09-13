
const getParContDem = () => {
  let containerElem = document.getElementById('fullsize-canvas');
  return [containerElem.parentNode.clientWidth, containerElem.parentNode.clientHeight];
}

const [width, height] = getParContDem();

const fullsize_cava = (sketch) => {
  sketch.setup = () => {
    let canva1 = sketch.createCanvas(width, height);
    canva1.parent('fullsize-canvas')
  };

  sketch.draw = () => {
    sketch.background(150);
  };
}

const fullsize_canva_resize = (sketch) => {
  sketch.setup = () => {
    sketch.createCanvas(width, height);
  }

  sketch.draw = () => {
    sketch.background(150);
  };

  sketch.windowResized = () => {
    const [resizedWidth, resizedHeight] = getParContDem();
    sketch.resizeCanvas(resizedWidth, resizedHeight);
  }
}

new p5(fullsize_cava);
new p5(fullsize_canva_resize, document.getElementById('fullsize-canvas-resize'));
