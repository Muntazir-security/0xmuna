import React, { useEffect, useRef, useMemo } from "react";

const UnifiedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
  }>>([]);

  const colors = useMemo(() => ['#6366f1', '#a855f7', '#3b82f6', '#8b5cf6', '#06b6d4'], []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = Math.max(document.documentElement.scrollHeight, window.innerHeight) * dpr;
      
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${Math.max(document.documentElement.scrollHeight, window.innerHeight)}px`;
      
      ctx.scale(dpr, dpr);
    };

    // Initialize particles only once
    const initializeParticles = () => {
      if (particlesRef.current.length === 0) {
        const particleCount = window.innerWidth < 768 ? 30 : 50; // Reduced count
        for (let i = 0; i < particleCount; i++) {
          particlesRef.current.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.4 + 0.1,
            color: colors[Math.floor(Math.random() * colors.length)]
          });
        }
      }
    };

    updateCanvasSize();
    initializeParticles();

    let lastTime = 0;
    const targetFPS = 30; // Reduced FPS for better performance
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      particlesRef.current.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary checking
        if (particle.x < 0 || particle.x > rect.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > rect.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Draw connections (limited to improve performance)
        particlesRef.current.slice(i + 1, i + 4).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) { // Reduced connection distance
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color + '15';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      updateCanvasSize();
      // Re-distribute particles on resize
      particlesRef.current.forEach(particle => {
        if (particle.x > window.innerWidth) particle.x = window.innerWidth - 50;
        if (particle.y > window.innerHeight) particle.y = window.innerHeight - 50;
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colors]);

  return (
    <>
      {/* Static gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-50" />
      
      {/* Animated particles overlay */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none -z-40"
        style={{ 
          mixBlendMode: 'screen',
          opacity: 0.6 
        }}
      />
      
      {/* Subtle grid overlay */}
      <div 
        className="fixed inset-0 -z-30 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />
    </>
  );
};

export default UnifiedBackground;