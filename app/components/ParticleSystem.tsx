'use client';

import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseX: number;
  baseY: number;
}

const PARTICLE_COUNT = 80; // Reduced from 200 to 80 for better performance

const ParticleSystem: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0, radius: 150, isInside: false });

  // Initialize particles randomly across the screen
  const initParticles = (width: number, height: number) => {
    particles.current = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      let x = Math.random() * width;
      let y = Math.random() * height;
      let vx = (Math.random() - 0.5) * 0.3; // Reduced velocity magnitude
      let vy = (Math.random() - 0.5) * 0.3;

      particles.current.push({ x, y, vx, vy, size: Math.random() * 1.5 + 0.5, baseX: x, baseY: y });
    }
  };

  // Update particles position with mouse interaction
  const updateParticles = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);

    particles.current.forEach((p) => {
      // Move particle
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse interaction
      if (mouse.current.isInside) {
        let dx = p.x - mouse.current.x;
        let dy = p.y - mouse.current.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.current.radius) {
          let force = (mouse.current.radius - dist) / mouse.current.radius;
          p.vx += force * (dx / dist) * 0.05; // Reduced force multiplier
          p.vy += force * (dy / dist) * 0.05;
        }
      }

      // Draw particle
      ctx.beginPath();
      ctx.fillStyle = 'rgba(59, 130, 246, 0.6)'; // blue accent with transparency
      ctx.shadowColor = '#3b82f6';
      ctx.shadowBlur = 3; // Reduced shadow blur
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      // Slow down velocity
      p.vx *= 0.95;
      p.vy *= 0.95;
    });

    // Draw connections between nearby particles - limit max connections per frame for performance
    const maxConnections = 100;
    let connectionsDrawn = 0;
    particles.current.forEach((p1, i) => {
      if (connectionsDrawn >= maxConnections) return;
      for (let j = i + 1; j < particles.current.length; j++) {
        if (connectionsDrawn >= maxConnections) break;
        let p2 = particles.current[j];
        let dx = p1.x - p2.x;
        let dy = p1.y - p2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) { // Reduced connection distance
          ctx.beginPath();
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - dist / 80)})`;
          ctx.lineWidth = 0.4;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
          connectionsDrawn++;
        }
      }
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.clientWidth * window.devicePixelRatio;
    let height = canvas.clientHeight * window.devicePixelRatio;
    canvas.width = width;
    canvas.height = height;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    initParticles(width, height);

    const render = () => {
      updateParticles(ctx, width, height);
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) * window.devicePixelRatio;
      mouse.current.y = (e.clientY - rect.top) * window.devicePixelRatio;
      mouse.current.isInside = true;
    };

    const handleMouseLeave = () => {
      mouse.current.isInside = false;
    };

    const handleResize = () => {
      width = canvas.clientWidth * window.devicePixelRatio;
      height = canvas.clientHeight * window.devicePixelRatio;
      canvas.width = width;
      canvas.height = height;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles(width, height);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ touchAction: 'none' }}
    />
  );
};

export { ParticleSystem };
