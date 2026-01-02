class Particle {
  x;
  y;
  vx;
  vy;
  size;
  color;
  shape;
  angle;
  spin;
  opacity;
  life;
  maxLife;
  // Theme context
  theme;
  canvasWidth;
  canvasHeight;
  constructor(width, height, theme) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.theme = theme;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.size = 0;
    this.color = "#fff";
    this.shape = "circle";
    this.angle = 0;
    this.spin = 0;
    this.opacity = 0;
    this.life = 0;
    this.maxLife = 0;
    this.reset(true);
  }
  reset(randomY = false) {
    this.x = Math.random() * this.canvasWidth;
    this.y = randomY ? Math.random() * this.canvasHeight : this.getStartY();
    this.size = Math.random() * (this.theme.maxSize - this.theme.minSize) + this.theme.minSize;
    const speed = Math.random() * (this.theme.maxSpeed - this.theme.minSpeed) + this.theme.minSpeed;
    const angleRad = this.getActionAngle();
    this.vx = Math.cos(angleRad) * speed;
    this.vy = Math.sin(angleRad) * speed;
    this.color = this.theme.colors[Math.floor(Math.random() * this.theme.colors.length)];
    this.shape = this.theme.shapes[Math.floor(Math.random() * this.theme.shapes.length)];
    this.opacity = Math.random() * (this.theme.opacity.max - this.theme.opacity.min) + this.theme.opacity.min;
    this.angle = Math.random() * 360;
    this.spin = (Math.random() - 0.5) * 0.2;
    this.life = 0;
    this.maxLife = Math.random() * 200 + 100;
  }
  getStartY() {
    switch (this.theme.motion) {
      case "rise":
      case "float":
        return this.theme.motion === "rise" ? this.canvasHeight + this.size : Math.random() * this.canvasHeight;
      case "fall":
      case "rain":
        return -this.size;
      case "spiral":
        return Math.random() * this.canvasHeight;
      // Spirals often emerge
      default:
        return Math.random() * this.canvasHeight;
    }
  }
  getActionAngle() {
    switch (this.theme.motion) {
      case "rise":
        return -Math.PI / 2 + (Math.random() - 0.5) * 0.5;
      // Upward with slight spread
      case "fall":
        return Math.PI / 2 + (Math.random() - 0.5) * 0.5;
      // Downward
      case "rain":
        return Math.PI / 2 + 0.2;
      // Slight diagonal rain
      case "float":
        return -Math.PI / 2 + (Math.random() - 0.5) * 2;
      // Generally up but wide spread
      case "spiral":
        return Math.random() * Math.PI * 2;
      case "shimmer":
        return Math.random() * Math.PI * 2;
      // Move slightly in any direction
      default:
        return -Math.PI / 2;
    }
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.angle += this.spin;
    this.life++;
    if (this.theme.motion === "float") {
      this.vx += (Math.random() - 0.5) * 0.05;
      this.vy += (Math.random() - 0.5) * 0.05;
    }
    if (this.theme.motion === "spiral") {
      this.x += Math.sin(this.life * 0.05) * 0.5;
    }
    const isOutOfBounds = this.y < -50 && this.vy < 0 || this.y > this.canvasHeight + 50 && this.vy > 0 || this.x < -50 || this.x > this.canvasWidth + 50;
    if (isOutOfBounds) {
      this.reset();
    }
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle * Math.PI / 180);
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    if (this.theme.glow) {
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
    }
    this.drawShape(ctx);
    ctx.restore();
  }
  drawShape(ctx) {
    const r = this.size;
    switch (this.shape) {
      case "circle":
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fill();
        break;
      case "square":
        ctx.fillRect(-r, -r, r * 2, r * 2);
        break;
      case "star":
        this.drawStar(ctx, r);
        break;
      case "drop":
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.moveTo(0, -r);
        ctx.lineTo(0, -r * 3);
        ctx.fill();
        break;
      case "flag_rect":
        ctx.fillRect(-r * 1.5, -r, r * 3, r * 2);
        break;
      // Emoji shapes for complex items
      case "snowflake":
        this.drawText(ctx, "\u2744\uFE0F");
        break;
      case "leaf":
        this.drawText(ctx, "\u{1F342}");
        break;
      case "flower":
        this.drawText(ctx, "\u{1F338}");
        break;
      case "petal":
        this.drawText(ctx, "\u2740");
        break;
      // Unicode flower
      case "crescent":
        this.drawText(ctx, "\u{1F319}");
        break;
      case "sun":
        this.drawText(ctx, "\u2600\uFE0F");
        break;
      case "dust":
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fill();
        break;
      case "kite":
        this.drawText(ctx, "\u{1FA81}");
        break;
      case "om":
        this.drawText(ctx, "\u{1F549}\uFE0F");
        break;
      case "lamp":
        this.drawText(ctx, "\u{1FA94}");
        break;
      case "modak":
        this.drawText(ctx, "\u{1F95F}");
        break;
      // Dumpling closest to Modak
      case "feather":
        this.drawText(ctx, "\u{1FAB6}");
        break;
      case "confetti":
        ctx.fillRect(-r, -r / 2, r * 2, r);
        break;
      case "note":
        this.drawText(ctx, "\u{1F3B5}");
        break;
      default:
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fill();
    }
  }
  drawText(ctx, text) {
    ctx.font = `${this.size * 2}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 0, 0);
  }
  drawStar(ctx, r) {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      ctx.lineTo(
        Math.cos((18 + i * 72) * Math.PI / 180) * r,
        -Math.sin((18 + i * 72) * Math.PI / 180) * r
      );
      ctx.lineTo(
        Math.cos((54 + i * 72) * Math.PI / 180) * (r / 2),
        -Math.sin((54 + i * 72) * Math.PI / 180) * (r / 2)
      );
    }
    ctx.fill();
  }
}
export {
  Particle
};
