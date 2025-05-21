
import React, { useEffect, useRef } from "react";

export const PageBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    // Star properties
    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      speed: number;
      pulse: number;
      pulseSpeed: number;
    }> = [];
    
    // Initialize stars
    const createStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 10000);
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          speed: Math.random() * 0.05,
          pulse: 0,
          pulseSpeed: Math.random() * 0.02 + 0.005
        });
      }
    };
    
    createStars();
    
    // Render stars
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#0B0B1E");
      gradient.addColorStop(1, "#12122a");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        // Update pulse animation
        star.pulse += star.pulseSpeed;
        if (star.pulse > Math.PI * 2) star.pulse = 0;
        
        // Calculate current opacity based on pulse
        const pulseOpacity = star.opacity * (0.7 + 0.3 * Math.sin(star.pulse));
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${pulseOpacity})`;
        ctx.fill();
        
        // Move star slightly
        star.y += star.speed;
        
        // Wrap around if offscreen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Add subtle nebula effects
      drawNebula(ctx, canvas.width * 0.3, canvas.height * 0.2, 200, "#6366f1", 0.03);
      drawNebula(ctx, canvas.width * 0.7, canvas.height * 0.8, 250, "#a855f7", 0.02);
      
      requestAnimationFrame(render);
    };
    
    // Function to draw nebula effects
    const drawNebula = (
      ctx: CanvasRenderingContext2D, 
      x: number, 
      y: number, 
      radius: number, 
      color: string, 
      opacity: number
    ) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, "transparent");
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };
    
    // Start animation
    render();
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0B0B1E]">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0"
        style={{ filter: "blur(1px)" }}
      />
    </div>
  );
};

export default PageBackground;
