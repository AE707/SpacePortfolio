"use client";

import { useEffect, useRef } from "react";

const STAR_COUNT = 2000;
const MAX_STAR_RADIUS = 1;

function getRandomStars(count: number) {
  const stars: { x: number; y: number; r: number; opacity: number }[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * MAX_STAR_RADIUS + 0.2,
      opacity: 0.2 + Math.random() * 0.2,
    });
  }
  return stars;
}

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef(getRandomStars(STAR_COUNT));
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const x = s.x * w;
        const y = s.y * h;
        const twinkle = 0.7 + 0.3 * Math.sin(Date.now() * 0.002 + i);
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity * twinkle})`;
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full min-h-screen fixed inset-0 z-[1] pointer-events-none"
      style={{ display: "block" }}
      aria-hidden
    />
  );
};

export default StarBackground;
