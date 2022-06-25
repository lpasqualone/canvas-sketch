const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');


const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true,
  duration: 8,
  fps: 1.2,
  playbackRate: 'throttle'
};

const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
};

const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
}


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#ccebff';
    context.fillRect(0, 0, width, height);

    context.fillStyle = '#d78465';

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.008;
    const h = height * 0.3
    let x,y;


    const num = 12;
    const radius = width * 0.2;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      // spokes
      // context.save();
      // context.translate(x,y);
      // context.rotate(-angle);
      // context.scale(random.range(0.8, 2), random.range(0.3, 0.9));;

      // context.beginPath();
      // context.rect(-w * 0.6, random.range(0, -h * 0.5), w, h);
      // context.fill();
      // context.restore();

      // light blue spirals, inner
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range (5, 20);;

      context.beginPath();
      context.strokeStyle = '#52bafc';
      context.arc(0, 0, radius * random.range(0.7, 1.8), slice * random.range(0, -5), slice * random.range(1, 7));
      context.stroke();

      context.restore();

      // dark blue spirals, outer
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range (8, 15);;

      context.beginPath();
      context.strokeStyle = 'blue';
      context.arc(0, 0, radius * random.range(0.9, 2), slice * random.range(1, -8), slice * random.range(1, 6));
      context.stroke();

      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
