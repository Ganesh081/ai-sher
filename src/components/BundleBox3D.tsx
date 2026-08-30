import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Zap, Flame, Shield, Sparkles, Upload, Image as ImageIcon, Check } from 'lucide-react';
import { BundleConfig } from '../types';
import { HulkPosterGraphic } from './HulkPosterGraphic';

interface BundleBoxProps {
  config?: BundleConfig;
  onImageUpdate?: (url: string) => void;
}

export const BundleBox3D: React.FC<BundleBoxProps> = ({ config, onImageUpdate }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Background electric lightning & energy ray canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 460);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 520);

    const particles: Array<{ x: number; y: number; size: number; speedY: number; speedX: number; opacity: number }> = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.8,
        speedY: -(Math.random() * 1.5 + 0.5),
        speedX: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.8 + 0.2
      });
    }

    let lightningTimer = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw Perspective Neon Radial Energy Rays
      ctx.lineWidth = 1.2;
      for (let i = 0; i < 16; i++) {
        const angle = (i * Math.PI) / 8 + Date.now() * 0.0002;
        const grad = ctx.createLinearGradient(centerX, centerY, centerX + Math.cos(angle) * width, centerY + Math.sin(angle) * height);
        grad.addColorStop(0, 'rgba(163, 230, 53, 0.25)');
        grad.addColorStop(0.5, 'rgba(34, 197, 94, 0.1)');
        grad.addColorStop(1, 'transparent');
        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + Math.cos(angle) * width * 1.2, centerY + Math.sin(angle) * height * 1.2);
        ctx.stroke();
      }

      // Draw Random Electric Lightning Sparks
      lightningTimer++;
      if (lightningTimer % 24 === 0) {
        ctx.strokeStyle = 'rgba(163, 230, 53, 0.8)';
        ctx.shadowColor = '#a3e635';
        ctx.shadowBlur = 12;
        ctx.lineWidth = 2;
        ctx.beginPath();
        let lx = Math.random() > 0.5 ? width * 0.1 : width * 0.85;
        let ly = Math.random() * height * 0.4;
        ctx.moveTo(lx, ly);
        for (let s = 0; s < 5; s++) {
          lx += (Math.random() - 0.5) * 50;
          ly += Math.random() * 40 + 10;
          ctx.lineTo(lx, ly);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Floating Glow Particles
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y < 0) {
          p.y = height + 5;
          p.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(163, 230, 53, ${p.opacity})`;
        ctx.shadowColor = '#a3e635';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setMousePos({ x, y });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onImageUpdate) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageUpdate(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && onImageUpdate) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageUpdate(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`relative w-full max-w-[460px] mx-auto flex flex-col items-center justify-center p-2 select-none group transition-all ${
        isDragging ? 'ring-2 ring-lime-400 ring-offset-4 ring-offset-black rounded-3xl' : ''
      }`}
    >
      {/* Hidden File Input for Image Upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Background Lightning & Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl z-0"
      />

      {/* Ambient Neon Power Glows */}
      <div className="absolute w-80 h-80 rounded-full bg-lime-400/20 blur-[90px] pointer-events-none" />
      <div className="absolute w-60 h-60 rounded-full bg-emerald-500/25 blur-[70px] pointer-events-none" />

      {/* TOP SLOGAN: UNLEASH THE POWER OF AI! */}
      <motion.div
        animate={{ opacity: [0.9, 1, 0.9], scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative z-20 text-center mb-3"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black italic tracking-widest text-lime-400 font-display uppercase drop-shadow-[0_0_15px_rgba(163,230,53,0.9)]">
          UNLEASH THE POWER OF AI!
        </h2>
      </motion.div>

      {/* If custom product image is uploaded, render the uploaded poster artwork in 3D frame */}
      {config?.productImageUrl ? (
        <div className="relative w-full max-w-[420px] my-2">
          <motion.div
            style={{
              transformStyle: 'preserve-3d',
              perspective: 1000
            }}
            animate={{
              rotateY: isHovered ? mousePos.x : [-3, 3, -3],
              rotateX: isHovered ? mousePos.y : [2, -2, 2],
              y: [0, -6, 0]
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              rotateY: isHovered ? { duration: 0.1 } : { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              rotateX: isHovered ? { duration: 0.1 } : { duration: 5, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="relative rounded-2xl overflow-hidden border-2 border-lime-400 shadow-[0_0_50px_rgba(163,230,53,0.7)]"
          >
            <img
              src={config.productImageUrl}
              alt="250+ AI Hulk Story Reels Bundle"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover rounded-xl"
            />
          </motion.div>
        </div>
      ) : (
        /* MAIN 3D PRODUCT POSTER SHOWCASE */
        <motion.div
          style={{
            transformStyle: 'preserve-3d',
            perspective: 1000
          }}
          animate={{
            rotateY: isHovered ? mousePos.x : [-3, 3, -3],
            rotateX: isHovered ? mousePos.y : [2, -2, 2],
            y: [0, -6, 0]
          }}
          transition={{
            y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
            rotateY: isHovered ? { duration: 0.1 } : { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            rotateX: isHovered ? { duration: 0.1 } : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="relative w-full max-w-[440px] my-2 cursor-pointer"
        >
          <HulkPosterGraphic />
        </motion.div>
      )}

      {/* BOTTOM SLOGAN: UNLEASH THE POWER OF AI! */}
      <motion.div
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative z-20 text-center mt-3"
      >
        <p className="text-sm sm:text-base md:text-lg font-black italic tracking-widest text-lime-400 font-display uppercase drop-shadow-[0_0_12px_rgba(163,230,53,0.8)]">
          UNLEASH THE POWER OF AI!
        </p>
      </motion.div>

    </div>
  );
};

