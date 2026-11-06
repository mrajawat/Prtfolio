'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const socialLinks = [
  { name: 'GitHub', Icon: Github, href: SITE_CONFIG.github },
  { name: 'LinkedIn', Icon: Linkedin, href: SITE_CONFIG.linkedin },
  { name: 'Email', Icon: Mail, href: `mailto:${SITE_CONFIG.email}` },
];

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      style={{
        background: '#0a0a0a',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="pb-8">


        {/* Divider */}
        <div className='bg-gradient-to-r from-red-600 to-orange-600' style={{ height: 1, marginBottom: 24 }} />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-xs font-light" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © {year}{' '}
            <span style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 400 }}>
              {SITE_CONFIG.name}
            </span>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map(({ name, Icon, href }) => (
              <a
                key={name}
                href={href}
                target={name !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                title={name}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.footer>
  );
}