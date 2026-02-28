import { useEffect, useRef } from 'react';
import { FlaskConical } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLanguage();

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

    // Wave lines - Vermilion theme
    const lines: { x: number; offset: number; speed: number; amplitude: number }[] = [];
    const lineCount = 40;
    const lineSpacing = canvas.offsetWidth / lineCount;

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: i * lineSpacing + lineSpacing / 2,
        offset: Math.random() * Math.PI * 2,
        speed: 0.01 + Math.random() * 0.01,
        amplitude: 15 + Math.random() * 20,
      });
    }

    let time = 0;
    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      time += 0.005;

      lines.forEach((line, i) => {
        ctx.beginPath();
        // Vermilion gradient
        const alpha = 0.1 + (i / lineCount) * 0.15;
        ctx.strokeStyle = `rgba(${185 + i}, ${28}, ${28}, ${alpha})`;
        ctx.lineWidth = 1;

        for (let y = 0; y < canvas.offsetHeight; y += 5) {
          const wave = Math.sin(y * 0.02 + time + line.offset) * line.amplitude;
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
    <footer className="relative bg-black border-t border-red-900/20">
      {/* Wave Animation */}
      <div className="relative h-64 overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <FlaskConical className="w-6 h-6 text-red-600" />
            <span className="text-lg font-medium tracking-tight text-white">ONIZUKA</span>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} ONIZUKA AGI Co.
            </p>
          </div>

          <p className="text-xs text-red-600/60 font-mono">
            {t('footer.guardian')}
          </p>

          <p className="text-xs text-white/20">
            {t('footer.experimental')}
          </p>
        </div>
      </div>
    </footer>
  );
}
