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

const PARTICLE_COUNT = 150;
const CIRCLE_RADIUS = 150;

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0, radius: 100, isInside: false });

  // Initialize particles inside the circle
  const initParticles = (width: number, height: number) => {
    particles.current = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Random position inside circle
      let angle = Math.random() * 2 * Math.PI;
      let radius = Math.random() * CIRCLE_RADIUS;
      let x = width / 2 + radius * Math.cos(angle);
      let y = height / 2 + radius * Math.sin(angle);

      // Velocity for haphazard movement
      let vx = (Math.random() - 0.5) * 0.6;
      let vy = (Math.random() - 0.5) * 0.6;

      particles.current.push({ x, y, vx, vy, size: 2, baseX: x, baseY: y });
    }
  };

  // Update particles position with boundary and mouse ripple effect
  const updateParticles = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);

    // Draw enclosing circle
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)'; // blue accent with transparency
    ctx.lineWidth = 2;
    ctx.arc(width / 2, height / 2, CIRCLE_RADIUS, 0, Math.PI * 2);
    ctx.stroke();

    particles.current.forEach((p) => {
      // Move particle
      p.x += p.vx;
      p.y += p.vy;

      // Bounce inside circle boundary
      let dx = p.x - width / 2;
      let dy = p.y - height / 2;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > CIRCLE_RADIUS) {
        // Reflect velocity vector
        let angle = Math.atan2(dy, dx);
        p.x = width / 2 + CIRCLE_RADIUS * Math.cos(angle);
        p.y = height / 2 + CIRCLE_RADIUS * Math.sin(angle);
        p.vx = -p.vx;
        p.vy = -p.vy;
      }

      // Mouse ripple effect
      if (mouse.current.isInside) {
        let mx = mouse.current.x;
        let my = mouse.current.y;
        let dxm = p.x - mx;
        let dym = p.y - my;
        let distMouse = Math.sqrt(dxm * dxm + dym * dym);
        if (distMouse < mouse.current.radius) {
          // Calculate ripple force
          let force = (mouse.current.radius - distMouse) / mouse.current.radius;
          let angle = Math.atan2(dym, dxm);
          p.vx += force * Math.cos(angle) * 0.5;
          p.vy += force * Math.sin(angle) * 0.5;
        }
      }

      // Draw particle
      ctx.beginPath();
      ctx.fillStyle = '#3b82f6'; // blue accent color
      ctx.shadowColor = '#3b82f6';
      ctx.shadowBlur = 8;
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      // Slow down velocity gradually for natural movement
      p.vx *= 0.95;
      p.vy *= 0.95;
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

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full max-w-[400px] max-h-[400px] mx-auto"
      style={{ touchAction: 'none' }}
    />
  );
};

export default Particles;
