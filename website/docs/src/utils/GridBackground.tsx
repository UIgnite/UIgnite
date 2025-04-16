import {useTheme} from '@pkgs/uignite';
import {useEffect, useRef} from 'react';

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(document.createElement('canvas'));
  const {theme} = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isDark = theme === 'dark';

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Check against canvas boundaries - canvas is guaranteed to be non-null here
        // as we've checked it at the beginning of the effect
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = isDark
          ? 'rgba(59, 130, 246, 0.1)'
          : 'rgba(59, 130, 246, 0.1)';
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    function initParticles() {
      particles = [];
      // Canvas is guaranteed to be non-null here
      const gridSize = 30;
      const numX = Math.ceil(canvas.width / gridSize);
      const numY = Math.ceil(canvas.height / gridSize);

      for (let x = 0; x < numX; x++) {
        for (let y = 0; y < numY; y++) {
          particles.push(new Particle(x * gridSize, y * gridSize));
        }
      }
    }

    function drawGrid() {
      if (!ctx) return;
      // Canvas is guaranteed to be non-null here
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = isDark
        ? 'rgba(30, 58, 138, 0.2)'
        : 'rgba(219, 234, 254, 0.5)';
      ctx.lineWidth = 1;

      const gridSize = 30;

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections between particles
      ctx.strokeStyle = isDark
        ? 'rgba(59, 130, 246, 1)'
        : 'rgba(59, 130, 246, 1)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 60) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawGrid);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed opacity-5 inset-0 -z-10 h-full w-full bg-background transition-colors duration-300"
    />
  );
}
