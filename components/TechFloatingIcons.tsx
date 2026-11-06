'use client';

import { useEffect, useRef } from 'react';
import { 
  FaJs, 
  FaPhp, 
  FaLaravel, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaDocker, 
  FaAws, 
  FaLinux 
} from 'react-icons/fa6';
import {
  SiTypescript,
  SiPostgresql,
  SiRedis,
  SiRedux,
  SiNginx,
  SiTailwindcss,
  SiGo,
  SiHtml5,
  SiCss,
  SiMysql
} from 'react-icons/si';

const TECH_ICONS = [
  { Icon: SiTypescript, color: '#3178C6', label: 'TS' },
  { Icon: FaJs, color: '#F7DF1E', label: 'JS' },
  { Icon: FaPhp, color: '#8892BF', label: 'PHP' },
  { Icon: FaLaravel, color: '#FF2D20', label: 'Laravel' },
  { Icon: FaReact, color: '#61DAFB', label: 'React' },
  { Icon: FaNodeJs, color: '#68A063', label: 'Node.js' },
  { Icon: SiMysql, color: '#4479A1', label: 'MySQL' },
  { Icon: FaGitAlt, color: '#F05032', label: 'Git' },
  { Icon: SiPostgresql, color: '#4169E1', label: 'Postgres' },
  { Icon: SiRedis, color: '#DC382D', label: 'Redis' },
  { Icon: SiRedux, color: '#764ABC', label: 'Redux' },
  { Icon: FaDocker, color: '#2496ED', label: 'Docker' },
  { Icon: FaAws, color: '#FF9900', label: 'AWS' },
  { Icon: FaLinux, color: '#FCC624', label: 'Linux' },
  { Icon: SiNginx, color: '#009639', label: 'Nginx' },
  { Icon: SiTailwindcss, color: '#06B6D4', label: 'Tailwind' },
  { Icon: SiGo, color: '#00ADD8', label: 'Go' },
  { Icon: SiHtml5, color: '#E34F26', label: 'HTML5' },
  { Icon: SiCss, color: '#1572B6', label: 'CSS3' },
];

const POSITIONS: [number, number][] = [
  [7, 9], [18, 5], [36, 4], [55, 7], [72, 11],
  [85, 26], [90, 46], [84, 66], [72, 80], [52, 84],
  [30, 82], [11, 72], [3, 52], [4, 29], [14, 20],
  [68, 19], [44, 12], [25, 63], [60, 55],
];

export default function FloatingIconsBg() {
  console.log("FloatingIconsBg (Icons version) is rendering...");
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<{ el: HTMLDivElement; depth: number }[]>([]);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const W = container.offsetWidth || window.innerWidth;
    const H = container.offsetHeight || window.innerHeight;
    
    mouseRef.current = { x: W / 2, y: H / 2 };
    smoothRef.current = { x: W / 2, y: H / 2 };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      smoothRef.current.x = lerp(smoothRef.current.x, mouseRef.current.x, 0.06);
      smoothRef.current.y = lerp(smoothRef.current.y, mouseRef.current.y, 0.06);
      
      const dx = smoothRef.current.x - W / 2;
      const dy = smoothRef.current.y - H / 2;

      tilesRef.current.forEach(t => {
        if (t.el) {
          t.el.style.transform = `translate(${dx * t.depth * 0.13}px, ${dy * t.depth * 0.13}px)`;
        }
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (glowRef.current) {
        glowRef.current.style.left = `${mouseRef.current.x}px`;
        glowRef.current.style.top = `${mouseRef.current.y}px`;
      }
    };

    const onLeave = () => {
      mouseRef.current = { x: W / 2, y: H / 2 };
    };

    window.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Cursor Glow */}
      <div
        ref={glowRef}
        className="absolute w-[420px] h-[420px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 sm:opacity-100"
        style={{
          background: 'radial-gradient(circle, rgba(224,45,27,0.15) 0%, transparent 65%)',
          transition: 'left 0.15s ease-out, top 0.15s ease-out',
        }}
      />

      {/* Ambient Blobs */}
      <div className="absolute w-[520px] h-[520px] -top-32 -left-32 rounded-full opacity-20 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #e02d1b 0%, transparent 70%)' }} />
      <div className="absolute w-[420px] h-[420px] -bottom-24 -right-24 rounded-full opacity-10 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #f07030 0%, transparent 70%)' }} />

      {/* Tech Icons Layer */}
      <div className="absolute inset-0">
        {TECH_ICONS.map((icon, i) => {
          const [px, py] = POSITIONS[i % POSITIONS.length];
          const depth = 0.4 + Math.random() * 0.9;
          
          return (
            <div
              key={i}
              ref={(el) => {
                if (el) tilesRef.current[i] = { el, depth };
              }}
              className="absolute w-12 h-12 bg-red-900/20 border border-red-500/30 rounded-lg flex items-center justify-center will-change-transform"
              style={{
                left: `${px}%`,
                top: `${py}%`,
              }}
            >
              <icon.Icon 
                className="w-6 h-6 opacity-70 transition-opacity hover:opacity-100" 
                style={{ color: icon.color }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
