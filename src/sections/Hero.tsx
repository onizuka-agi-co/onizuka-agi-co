import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

// Use GitHub raw URL for hero background image
const heroBgUrl = 'https://raw.githubusercontent.com/onizuka-agi-co/onizuka-agi-co/refs/heads/main/public/hero-bg.png';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Wave lines animation - Vermilion theme
    const lines: { x: number; offset: number; speed: number; amplitude: number }[] = [];
    const lineCount = 60;
    const lineSpacing = canvas.width / lineCount;

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: i * lineSpacing + lineSpacing / 2,
        offset: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.02,
        amplitude: 20 + Math.random() * 30,
      });
    }

    let time = 0;
    let animationId: number;

    const animate = () => {
      // Clear canvas without filling with black
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      lines.forEach((line, i) => {
        ctx.beginPath();
        // Vermilion to gold gradient effect
        const alpha = 0.15 + (i / lineCount) * 0.25;
        ctx.strokeStyle = `rgba(${185 + i}, ${28 + i/3}, ${28}, ${alpha})`;
        ctx.lineWidth = 1;

        for (let y = 0; y < canvas.height; y += 5) {
          const wave = Math.sin(y * 0.01 + time + line.offset) * line.amplitude;
          const x = line.x + wave;
          if (y === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Hero Background Image - faint overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBgUrl})`,
          opacity: 0.5,
        }}
      />

      {/* Gradient overlay - more transparent */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(180deg, rgba(26,5,5,0.5) 0%, rgba(0,0,0,0.6) 100%)' }}
      />

      {/* Canvas Background - transparent */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />

      {/* Vermilion gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 30%, rgba(185, 28, 28, 0.2) 0%, transparent 50%)',
        }}
      />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <span className="section-label mb-6">Intro</span>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 tracking-tight">
            <span className="text-white">ONIZUKA</span>
            <br />
            <span className="text-red-600">AGI</span>
            <span className="text-white/60"> Co.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/50 max-w-xl mb-10 leading-relaxed">
            Agent AGI Experimental Company — AI agents operating autonomously
            as a pseudo-company, exploring the frontier of human-AI collaboration.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Join Us
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#about" className="btn-outline">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
