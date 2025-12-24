import { ThemeConfig, ParticleShape, MotionType } from "../config/themes";

export class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    shape: ParticleShape;
    angle: number;
    spin: number;
    opacity: number;
    life: number;
    maxLife: number;

    // Theme context
    private theme: ThemeConfig;
    private canvasWidth: number;
    private canvasHeight: number;

    constructor(width: number, height: number, theme: ThemeConfig) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.theme = theme;

        // Initialize properties temporarily to satisfy TS, then call reset
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
        // Position
        this.x = Math.random() * this.canvasWidth;
        this.y = randomY ? Math.random() * this.canvasHeight : this.getStartY();

        // Size
        this.size = Math.random() * (this.theme.maxSize - this.theme.minSize) + this.theme.minSize;

        // Speed & Velocity (Anti-Gravity logic here)
        const speed = Math.random() * (this.theme.maxSpeed - this.theme.minSpeed) + this.theme.minSpeed;
        const angleRad = this.getActionAngle();

        this.vx = Math.cos(angleRad) * speed;
        this.vy = Math.sin(angleRad) * speed;

        // Appearance
        this.color = this.theme.colors[Math.floor(Math.random() * this.theme.colors.length)];
        this.shape = this.theme.shapes[Math.floor(Math.random() * this.theme.shapes.length)];
        this.opacity = Math.random() * (this.theme.opacity.max - this.theme.opacity.min) + this.theme.opacity.min;

        // Rotation
        this.angle = Math.random() * 360;
        this.spin = (Math.random() - 0.5) * 0.2; // Gentle spin

        // Life (for fading out / regenerating)
        this.life = 0;
        this.maxLife = Math.random() * 200 + 100;
    }

    getStartY(): number {
        switch (this.theme.motion) {
            case "rise":
            case "float": // Often float implies generally upward or hovering
                // If rising, start at bottom
                return this.theme.motion === "rise" ? this.canvasHeight + this.size : Math.random() * this.canvasHeight;
            case "fall":
            case "rain":
                return -this.size;
            case "spiral":
                return Math.random() * this.canvasHeight; // Spirals often emerge
            default:
                return Math.random() * this.canvasHeight;
        }
    }

    getActionAngle(): number {
        // 0 = Right, PI/2 = Down, PI = Left, -PI/2 = Up
        switch (this.theme.motion) {
            case "rise":
                return -Math.PI / 2 + (Math.random() - 0.5) * 0.5; // Upward with slight spread
            case "fall":
                return Math.PI / 2 + (Math.random() - 0.5) * 0.5; // Downward
            case "rain":
                return Math.PI / 2 + 0.2; // Slight diagonal rain
            case "float":
                // Random drifting (Anti-gravity feel often means slow upward drift)
                return -Math.PI / 2 + (Math.random() - 0.5) * 2; // Generally up but wide spread
            case "spiral":
                return Math.random() * Math.PI * 2;
            case "shimmer":
                return Math.random() * Math.PI * 2; // Move slightly in any direction
            default:
                return -Math.PI / 2;
        }
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.angle += this.spin;
        this.life++;

        // Motion modifiers
        if (this.theme.motion === "float") {
            this.vx += (Math.random() - 0.5) * 0.05;
            this.vy += (Math.random() - 0.5) * 0.05;
        }

        if (this.theme.motion === "spiral") {
            this.x += Math.sin(this.life * 0.05) * 0.5;
        }

        // Wrap / Reset checks
        const isOutOfBounds =
            (this.y < -50 && this.vy < 0) ||
            (this.y > this.canvasHeight + 50 && this.vy > 0) ||
            (this.x < -50) ||
            (this.x > this.canvasWidth + 50);

        if (isOutOfBounds) {
            this.reset();
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        // Glow effect
        if (this.theme.glow) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
        }

        this.drawShape(ctx);

        ctx.restore();
    }

    drawShape(ctx: CanvasRenderingContext2D) {
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
                // Teardrop
                ctx.beginPath();
                // ... simplified for speed
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
                this.drawText(ctx, "❄️"); break;
            case "leaf":
                this.drawText(ctx, "🍂"); break;
            case "flower":
                this.drawText(ctx, "🌸"); break;
            case "petal":
                this.drawText(ctx, "❀"); break; // Unicode flower
            case "crescent":
                this.drawText(ctx, "🌙"); break;
            case "sun":
                this.drawText(ctx, "☀️"); break;
            case "dust":
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.fill(); // Just circles for dust
                break;
            case "kite":
                this.drawText(ctx, "🪁"); break;
            case "om":
                this.drawText(ctx, "🕉️"); break;
            case "lamp":
                this.drawText(ctx, "🪔"); break;
            case "modak":
                this.drawText(ctx, "🥟"); break; // Dumpling closest to Modak
            case "feather":
                this.drawText(ctx, "🪶"); break;
            case "confetti":
                ctx.fillRect(-r, -r / 2, r * 2, r); // Rect
                break;
            case "note":
                this.drawText(ctx, "🎵"); break;

            default:
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.fill();
        }
    }

    drawText(ctx: CanvasRenderingContext2D, text: string) {
        ctx.font = `${this.size * 2}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, 0, 0);
    }

    drawStar(ctx: CanvasRenderingContext2D, r: number) {
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            ctx.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * r,
                -Math.sin((18 + i * 72) * Math.PI / 180) * r);
            ctx.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * (r / 2),
                -Math.sin((54 + i * 72) * Math.PI / 180) * (r / 2));
        }
        ctx.fill();
    }
}
