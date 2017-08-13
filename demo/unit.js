class Unit {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;

        this.velX = 2;
        this.velY = 2;
        this.color = black;
       
    }

    
    move() {
        this.x += this.velX;
        this.y += this.velY;
    }

    moveTowards(x, y) {
      var dx = x - this.x;
      var dy = y - this.y;

      var angle = Math.atan2(dy, dx);

      this.velX = this.velMax * Math.cos(angle);
      this.velY = this.velMax * Math.sin(angle);
    }

    draw(ctx, vp) {

        var x = this.x - vp.x1;
        var y = this.y - vp.y1;

        ctx.fillStyle = this.color;
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

    }
}