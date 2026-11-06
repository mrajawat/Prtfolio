'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed w-full top-6 z-50 px-4 sm:px-6 lg:px-8"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#" className="flex items-center gap-2">
            <Image src="/favicon.png" alt="Logo" className='rounded-full' width={90} height={90} />
          </a>
        </motion.div>

        {/* Desktop Navigation (Pill) */}
        <div className="hidden md:flex items-center bg-black/40 backdrop-blur-xl px-2 py-1.5 rounded-full border border-white/10 shadow-2xl">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="px-6 py-2 text-sm font-bold text-gray-200 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Action Button (Right) */}
        <div className="hidden md:flex items-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(220, 38, 38, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-orange-600 text-white hover:shadow-2xl hover:shadow-red-600/50 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg transition-all"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden mt-2 glass rounded-3xl border border-white/10"
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <button className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white hover:shadow-2xl hover:shadow-red-600/50 rounded-full font-bold flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
