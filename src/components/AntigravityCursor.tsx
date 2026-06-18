"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import styles from "./AntigravityCursor.module.css";

interface Particle {
  id: number;
  x: number;
  y: number;
  type: "dot" | "text" | "symbol";
  content?: string;
  duration: number;
  floatDistance: number;
  driftX: number;
  rotateEnd: number;
  opacity: number;
}

const codeSymbols = ["</>", "{}", "()", "=>", "//", "[]", "&&", "||", "!=", "++", "**", "::"];
const antigravityWords = ["ANTIGRAVITY", "ZERO-G", "↑", "⬆", "✦", "◆", "▲"];

export default function AntigravityCursor() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isScrolling, setIsScrolling] = useState(false);
  const particleIdRef = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastSpawnRef = useRef(0);
  const mouseRef = useRef({ x: -100, y: -100 });
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const smoothPos = useRef({ x: -100, y: -100 });

  // Smooth cursor tracking with RAF
  const updateCursorPosition = useCallback(() => {
    const targetX = mouseRef.current.x;
    const targetY = mouseRef.current.y;

    // Smooth interpolation for ring (lags behind slightly)
    smoothPos.current.x += (targetX - smoothPos.current.x) * 0.15;
    smoothPos.current.y += (targetY - smoothPos.current.y) * 0.15;

    if (ringRef.current) {
      ringRef.current.style.left = `${smoothPos.current.x}px`;
      ringRef.current.style.top = `${smoothPos.current.y}px`;
    }
    if (dotRef.current) {
      dotRef.current.style.left = `${targetX}px`;
      dotRef.current.style.top = `${targetY}px`;
    }

    rafRef.current = requestAnimationFrame(updateCursorPosition);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(updateCursorPosition);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateCursorPosition]);

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll handler — spawn particles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 200);

      // Throttle particle spawning
      const now = Date.now();
      if (now - lastSpawnRef.current < 80) return;
      lastSpawnRef.current = now;

      const { x, y } = mouseRef.current;
      if (x < 0 || y < 0) return;

      // Randomly pick particle type
      const rand = Math.random();
      let type: Particle["type"];
      let content: string | undefined;

      if (rand < 0.4) {
        type = "dot";
      } else if (rand < 0.7) {
        type = "symbol";
        content = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
      } else {
        type = "text";
        content = antigravityWords[Math.floor(Math.random() * antigravityWords.length)];
      }

      const newParticle: Particle = {
        id: particleIdRef.current++,
        x: x + (Math.random() - 0.5) * 40,
        y: y + (Math.random() - 0.5) * 40,
        type,
        content,
        duration: 1.2 + Math.random() * 1.2,
        floatDistance: 80 + Math.random() * 160,
        driftX: (Math.random() - 0.5) * 100,
        rotateEnd: (Math.random() - 0.5) * 60,
        opacity: 0.3 + Math.random() * 0.4,
      };

      setParticles((prev) => {
        // Keep only last 20 particles for performance
        const trimmed = prev.length > 20 ? prev.slice(-15) : prev;
        return [...trimmed, newParticle];
      });

      // Remove particle after animation completes
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, newParticle.duration * 1000 + 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* Custom cursor ring */}
      <div
        ref={ringRef}
        className={`${styles.cursorRing} ${isScrolling ? styles.scrolling : ""}`}
      />
      {/* Custom cursor dot */}
      <div ref={dotRef} className={styles.cursorDot} />

      {/* Particle container */}
      <div className={styles.cursorContainer}>
        {particles.map((p) => (
          <div
            key={p.id}
            className={`${styles.particle} ${styles.active} ${
              p.type === "dot"
                ? styles.particleDot
                : p.type === "text"
                ? styles.particleText
                : styles.particleSymbol
            }`}
            style={
              {
                "--startX": `${p.x}px`,
                "--startY": `${p.y}px`,
                "--floatDistance": `${p.floatDistance}px`,
                "--driftX": `${p.driftX}px`,
                "--rotateEnd": `${p.rotateEnd}deg`,
                "--duration": `${p.duration}s`,
                "--startOpacity": p.opacity,
              } as React.CSSProperties
            }
          >
            {p.content}
          </div>
        ))}
      </div>
    </>
  );
}
