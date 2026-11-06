'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import FloatingIconsBg from './TechFloatingIcons';
import { SITE_CONFIG } from '@/lib/constants';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 sm:px-12 lg:px-16 py-16 pt-24 lg:pt-32"
      style={{ background: '#0a0a0a' }}
    >
      {/* ── Parallax floating tech icons background ── */}
      <FloatingIconsBg />



      {/* ── Main content + social sidebar ── */}
      <div className="relative z-10 flex items-end gap-12 max-w-7xl w-full mx-auto">

        {/* Left: hero copy */}
        <div className="flex-1">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 border rounded-sm text-xs font-semibold uppercase tracking-widest"
            style={{
              background: 'rgba(224,45,27,0.10)',
              borderColor: 'rgba(224,45,27,0.30)',
              color: '#e05030',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Available for work
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-extrabold leading-none tracking-tight"
            style={{

              fontSize: 'clamp(52px, 7vw, 88px)',
            }}
          >
            <span className="block text-white">Mohan Singh</span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(90deg, #e02d1b 0%, #f07030 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Rajawat
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex items-center gap-4 mt-5 mb-6"
          >
            <div
              className="h-0.5 w-10 flex-shrink-0 rounded-full"
              style={{ background: 'linear-gradient(90deg, #e02d1b, #f07030)' }}
            />
            <span className="text-xs uppercase tracking-widest font-medium text-white/40">
              Backend &amp; Full Stack Developer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base text-white/50 leading-relaxed max-w-lg mb-11 font-light"
          >
            Crafting robust, scalable applications with a focus on clean architecture.
            Specialized in Laravel, Node.js, and cloud infrastructure.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-3 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white rounded-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #e02d1b 0%, #f07030 100%)' }}
            >
              View My Work
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-3 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white/60 rounded-sm border border-white/15 hover:border-white/40 hover:text-white transition-all"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex gap-0 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            {[
              { num: '3+', label: 'Years Experience' },
              { num: '20+', label: 'Projects Shipped' },
              { num: '10+', label: 'Technologies' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="flex-1 pr-8 mr-8"
                style={i < 2 ? { borderRight: '1px solid rgba(255,255,255,0.07)' } : {}}
              >
                <div
                  className="text-3xl font-extrabold tracking-tight leading-none mb-1"
                  style={{

                    background: 'linear-gradient(90deg, #e02d1b, #f07030)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.num}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/30 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: vertical social sidebar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="hidden lg:flex flex-col items-center gap-4 pb-2 flex-shrink-0"
        >
          <span
            className="text-white/20 text-xs tracking-widest uppercase mb-1"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Connect
          </span>
          <div className="w-px h-10 bg-white/10" />
          <div className="flex flex-col gap-2.5">
            {[
              { href: SITE_CONFIG.github, Icon: Github },
              { href: SITE_CONFIG.linkedin, Icon: Linkedin },
              { href: `mailto:${SITE_CONFIG.email}`, Icon: Mail },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border rounded-sm transition-all group"
                style={{ borderColor: 'rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#e02d1b';
                  el.style.color = '#e02d1b';
                  el.style.background = 'rgba(224,45,27,0.08)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.10)';
                  el.style.color = 'rgba(255,255,255,0.4)';
                  el.style.background = 'transparent';
                }}
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
        <div
          className="w-px h-9 overflow-hidden relative"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <motion.div
            style={{
              width: 1,
              height: 12,
              background: '#e02d1b',
              position: 'absolute',
            }}
            animate={{ top: ['-12px', '48px'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;