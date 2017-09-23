let SIZE = 10;
let VELOCITY = 3;
let NUM_BALLS = 50;

let canvas, ctx, width, height;
const balls = [];

addEventListener('load', function () {
    canvas = document.querySelector("#canvas"),
        ctx = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    ctx.fillRect(0, 0, width, height);

    for (var i = 0; i < NUM_BALLS; i++) {
        let ball = new Ball(rand(0, width), rand(0, height));
        balls.push(ball);
    }

    runAnimation();
});

function runAnimation() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, 0, width, height);
    balls.forEach(b => b.draw());
    requestAnimationFrame(runAnimation);
}

function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.radius = SIZE;

    let angle = rand(0, Math.PI * 2);

    this.velX = VELOCITY * Math.cos(angle);
    this.velY = VELOCITY * Math.sin(angle);
    
    this.color = `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`;
}
Ball.prototype.draw = function () {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();

    this.x += this.velX;
    this.y += this.velY;

    if (this.x > width || this.x < 0) {
        this.velX *= -1;
    }
    if (this.y > height || this.y < 0) {
        this.velY *= -1;
    }
}

function rand(min, max) {
    return Math.random() * (max - min + 1) + min;
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}