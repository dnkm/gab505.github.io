class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.width = canvas.width;
        this.height = canvas.height;
        this.unitId = 0;

        this.units = [];
        this.fps = 60;
    }


    start() {
        var draw = this.draw.bind(this);
        this.procId = setInterval(draw, 1000 / this.fps);
    }

    draw() {
        this.moveUnits();

        if (typeof this.units[0] === 'undefined') {
        return;
    }

        var vp = this.getViewport();

        this.ctx.clearRect(0, 0, this.width, this.height);
        this.drawUnits(vp);
    }

    moveUnits() {
        for (let i = 0; i < this.units.length; i++) {
            this.units[i].move();
            this.checkCollision(this.units[i]);
        }
    }

    checkCollision(unit) {
        this.checkCollisionWall(unit);
    }

    checkCollisionWall(unit) {
        unit.x = Math.min(Math.max(unit.x, 0), this.width);
        unit.y = Math.min(Math.max(unit.y, 0), this.height);

        if (unit.x % this.width == 0) {
            unit.velX *= -1;
        }

        if (unit.y % this.height == 0) {
            unit.velY *= -1;
        }
    }

    drawUnits(vp) {
        var that = this;
        this.units.forEach(function (unit) {
            unit.draw(that.ctx, vp);
        });
    }

    spawnUnits() {
        var unit = new Unit(this.unitId++, this.width, this.height);
        this.units.push(unit);
    }

}