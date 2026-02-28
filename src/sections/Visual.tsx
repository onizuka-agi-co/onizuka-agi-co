import { useEffect, useRef } from 'react';

export default function Visual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle system for light rays - Vermilion theme
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }[] = [];

    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;

    const createParticle = () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 3;
      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 100 + Math.random() * 100,
      });
    };

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Add new particles
      if (particles.length < 200) {
        createParticle();
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const alpha = 1 - p.life / p.maxLife;

        ctx.beginPath();
        // Vermilion color
        ctx.strokeStyle = `rgba(185, 28, 28, ${alpha * 0.6})`;
        ctx.lineWidth = 1;
        ctx.moveTo(p.x - p.vx * 3, p.y - p.vy * 3);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative h-[60vh] min-h-[400px] bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-xs font-mono text-red-900/60 mb-4 tracking-widest uppercase">
            Cutting-edge Performance
          </p>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight">
            On <span className="text-red-600">AI-Specific</span> Workflows,
            <br />
            <span className="text-white/60">At Scale.</span>
          </h3>
        </div>
      </div>

      {/* Corner brackets - vermilion */}
      <div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-red-900/40" />
      <div className="absolute top-8 right-8 w-4 h-4 border-r border-t border-red-900/40" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-red-900/40" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-red-900/40" />
    </section>
  );
}
