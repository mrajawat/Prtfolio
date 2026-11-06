'use client';

import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const INFO_BLOCKS = [
  {
    tag: '01 — Specialization',
    title: 'Backend Development',
    desc: 'RESTful APIs, microservices architecture, database design and optimization for high-traffic systems.',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e05030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    tag: '02 — Focus Areas',
    title: 'Performance & Scalability',
    desc: 'System design, caching strategies, query optimization, and cloud infrastructure for production-grade apps.',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e05030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    tag: '03 — Approach',
    title: 'Clean Code & Collaboration',
    desc: 'SOLID principles, best practices, code reviews, and async team workflows to ship reliable software.',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e05030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const SKILL_CARDS = [
  {
    title: 'Backend & APIs',
    desc: 'Laravel, Node.js, REST, GraphQL, microservices',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e05030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Databases',
    desc: 'MySQL, PostgreSQL, MongoDB',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e05030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    title: 'Cloud & DevOps',
    desc: 'AWS, Docker, Nginx, CI/CD pipelines',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e05030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 px-6 sm:px-12 lg:px-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/20 rounded-none blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-none blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="h-0.5 w-9 flex-shrink-0"
                style={{ background: 'linear-gradient(90deg, #e02d1b, #f07030)' }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#e05030' }}
              >
                Who I am
              </span>
            </div>
            <h2
              className="font-extrabold leading-none tracking-tight text-white mb-2"
              style={{

                fontSize: 'clamp(36px, 4vw, 56px)',
              }}
            >
              About Me
            </h2>
            <p className="text-sm font-light tracking-wide" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Passionate about building scalable, high-performance systems
            </p>
          </motion.div>

          {/* Main 2-col grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left: prose + stats */}
            <motion.div variants={itemVariants}>
              <div className="space-y-5 mb-8">
                <p
                  className="text-base leading-relaxed font-light"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  I&apos;m a Backend / Full Stack Developer with 3+ years of hands-on experience designing
                  and implementing robust web applications. My expertise lies in building scalable systems
                  that prioritize performance, reliability, and user experience.
                </p>
                <p
                  className="text-base leading-relaxed font-light"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  Throughout my career I&apos;ve worked extensively with Laravel, Node.js, and modern cloud
                  technologies to develop complex systems — from ERP platforms to school management
                  solutions. I&apos;ve achieved a 25% performance boost in critical systems and consistently
                  deliver projects exceeding expectations.
                </p>
                <p
                  className="text-base leading-relaxed font-light"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  I believe in writing clean, maintainable code and fostering collaborative development
                  practices, while continuously staying updated with industry trends.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { num: '3+', label: 'Years Experience' },
                  { num: '25%', label: 'Performance Gain' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="glass p-5 border border-white/10 rounded-none hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20"
                  >
                    <div
                      className="font-extrabold leading-none mb-1"
                      style={{

                        fontSize: 32,
                        background: 'linear-gradient(90deg, #e02d1b, #f07030)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      className="text-xs uppercase tracking-widest font-medium"
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: numbered info blocks */}
            <motion.div variants={itemVariants} className="flex flex-col">
              {INFO_BLOCKS.map((block, i) => (
                <div
                  key={block.tag}
                  className="py-6"
                  style={{
                    borderBottom: i < INFO_BLOCKS.length - 1
                      ? '1px solid rgba(255,255,255,0.06)'
                      : 'none',
                    paddingTop: i === 0 ? 0 : undefined,
                  }}
                >
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: '#e05030' }}
                  >
                    {block.tag}
                  </div>
                  <div
                    className="font-bold text-white mb-2"
                    style={{ fontSize: 17 }}
                  >
                    {block.title}
                  </div>
                  <div
                    className="text-sm font-light leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {block.desc}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom skill cards */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-3 mt-14"
          >
            {SKILL_CARDS.map((card) => (
              <div
                key={card.title}
                className="glass p-6 border border-white/10 rounded-none hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 cursor-default flex-1"
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 3,
                    background: 'rgba(224,45,27,0.10)',
                    border: '1px solid rgba(224,45,27,0.20)',
                  }}
                >
                  {card.icon}
                </div>
                <div
                  className="font-bold text-white mb-1.5"
                  style={{ fontSize: 13 }}
                >
                  {card.title}
                </div>
                <div
                  className="text-xs font-light leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  {card.desc}
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}