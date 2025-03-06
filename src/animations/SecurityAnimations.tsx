
import React, { useEffect, useRef } from 'react';

// Animation for hero section showing security grid with moving elements
export const SecurityGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Nodes to represent security points
    const nodes: {x: number, y: number, vx: number, vy: number, radius: number}[] = [];
    
    // Create initial nodes
    const createNodes = () => {
      const nodeCount = Math.floor(canvas.width * canvas.height / 15000);
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1
        });
      }
    };
    
    createNodes();
    
    // Draw grid
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.1)';
      ctx.lineWidth = 0.5;
      
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
    };
    
    // Draw nodes and connections
    const drawNodes = () => {
      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(14, 165, 233, 0.6)';
        ctx.fill();
      });
      
      // Draw connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawGrid();
      drawNodes();
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full opacity-60"
    />
  );
};

// Shield animation for the security features
export const ShieldAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-32 h-32 md:w-40 md:h-40 relative animate-float">
        <div className="absolute inset-0 bg-gradient-to-br from-secure-400 to-secure-600 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute inset-2 bg-gradient-to-br from-secure-500 to-secure-700 rounded-full opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            className="w-16 h-16 md:w-20 md:h-20 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1" 
              d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            ></path>
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1" 
              d="M9 12l2 2 4-4"
            ></path>
          </svg>
        </div>
        <div className="absolute -inset-4 rounded-full border-4 border-secure-300 opacity-20 animate-spin-slow"></div>
        <div className="absolute -inset-8 rounded-full border-2 border-dashed border-secure-200 opacity-10 animate-spin-slow"></div>
      </div>
    </div>
  );
};

// Scan animation for real-time protection
export const ScanAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 md:w-40 md:h-40 relative animate-float">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-md opacity-20 animate-pulse-slow"></div>
        <div className="absolute inset-2 bg-gradient-to-br from-teal-500 to-teal-700 rounded-md opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-1 bg-teal-300 absolute animate-scan"></div>
          <svg 
            className="w-16 h-16 md:w-20 md:h-20 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1" 
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

// Observe scroll and animate elements
export const useScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    // Initial check
    animateOnScroll();
    
    window.addEventListener('scroll', animateOnScroll);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
};

export default {
  SecurityGrid,
  ShieldAnimation,
  ScanAnimation,
  useScrollAnimation
};
