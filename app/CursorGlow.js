'use client';
import { useEffect } from 'react';

export default function CursorGlow() {
  useEffect(() => {
    let lastTime = 0;
    
    const handleMouseMove = (e) => {
      const now = Date.now();
      // Throttle to avoid flooding DOM with too many particles
      if (now - lastTime < 40) return;
      lastTime = now;

      const particle = document.createElement('div');
      particle.className = 'aurora-particle';
      
      // Gold, yellow, white color palette for Aurora Borealis trail
      const colors = ['rgba(212, 175, 55, 0.6)', 'rgba(255, 238, 102, 0.5)', 'rgba(255, 255, 255, 0.7)'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Randomize the size of the glow a little
      const size = Math.random() * 40 + 20; 
      
      // Position it exactly inside the viewport
      particle.style.left = `${e.clientX - size / 2}px`;
      particle.style.top = `${e.clientY - size / 2}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.boxShadow = `0 0 30px 15px ${color}`;
      particle.style.background = color;
      
      document.body.appendChild(particle);
      
      // Auto-cleanup matches the CSS animation duration
      setTimeout(() => {
        if (document.body.contains(particle)) {
            document.body.removeChild(particle);
        }
      }, 1500); 
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}
