var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//make canvas the size of the window
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var W = window.innerWidth;
var H = window.innerHeight;

var particles = [];

// creats particle obects and pushes them to the particles array
for (var i = 0; i < 50; i++) {
  particles.push(new createParticles());
}

function createParticles() {
  // get random position
  this.x = Math.random() * W;
  this.y = Math.random() * H;

  //set object velocity
  this.vx = Math.random() * 1;
  this.vy = Math.random() * 1;

  //randomize colors
  var r = (Math.random() * 105) >> 0;
  var g = (Math.random() * 155) >> 0;
  var b = (Math.random() * 135) >> 0;
  this.color = "rgba(" + r + ", " + g + ", " + b + ", 1)";

  //randomize size
  this.size = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

  // define radius
  this.radius = Math.random() * 20 + 25;
}

var x = 100;
var y = 100;

function draw() {
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "#1b0029";
  ctx.fillRect(0, 0, W, H);

  // use screen to blend bubble colors with background
  ctx.globalCompositeOperation = "screen";
  ctx.saturate = 0.25;

  //loop through our particles array and draw each particle based on its properties
  for (var t = 0; t < particles.length; t++) {
    var p = particles[t];

    // Draw a particle
    ctx.beginPath();

    // create gradient
    //draw bubble
    ctx.arc(p.x, p.y, p.size, Math.PI * 2, false);
    ctx.fill();

    //set velocity
    p.x += p.vx;
    p.y += p.vy;

    //keep bubbles from escaping
    if (p.x < -300) p.x = W;
    if (p.y < -300) p.y = H;
    if (p.x > W + 300) p.x = -300;
    if (p.y > H + 300) p.y = -300;
  }
}

setInterval(draw, 63);
