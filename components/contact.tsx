'use client';

import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Contact() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `

        .grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .grid { grid-template-columns: 1fr; }
        }
 
        .left-col h3 {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #6b7280;
          margin-bottom: 32px;
        }
 
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 20px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          cursor: default;
          transition: all 0.25s;
          text-decoration: none;
          color: inherit;
        }
        .contact-item:first-of-type { border-top: 1px solid rgba(255,255,255,0.06); }
        .contact-item:hover { padding-left: 8px; }
        .contact-item:hover .ci-icon { background: linear-gradient(135deg, #dc2626, #ea580c); }
 
        .ci-num {
          font-size: 0.65rem;
          font-weight: 700;
          color: rgba(220,38,38,0.5);
          letter-spacing: 0.1em;
          margin-top: 4px;
          min-width: 20px;
        }
        .ci-icon {
          width: 40px; height: 40px;
          background: rgba(220,38,38,0.1);
          border: 1px solid rgba(220,38,38,0.2);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.25s;
        }
        .ci-body { flex: 1; }
        .ci-label { font-size: 0.7rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #6b7280; }
        .ci-value { font-size: 0.95rem; font-weight: 500; color: #e5e7eb; margin-top: 3px; }
 
        .avail {
          margin-top: 32px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(16,185,129,0.08);
          border: 1px solid rgba(16,185,129,0.2);
          border-radius: 100px;
          padding: 8px 16px;
          font-size: 0.8rem;
          color: #6ee7b7;
          font-weight: 500;
        }
        .avail-dot {
          width: 7px; height: 7px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.5); }
          50% { box-shadow: 0 0 0 5px rgba(16,185,129,0); }
        }
 
        .form-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 40px;
          backdrop-filter: blur(12px);
        }
 
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 500px) { .form-row { grid-template-columns: 1fr; } }
 
        .field { display: flex; flex-direction: column; gap: 8px; }
        .field label { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #dfe5f3; }
 
        .field input,
        .field textarea {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 13px 16px;
          font-size: 0.9rem;
          color: #f3f4f6;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          resize: none;
        }
        .field input::placeholder,
        .field textarea::placeholder { color: #4b5563; }
        .field input:focus,
        .field textarea:focus {
          border-color: rgba(220,38,38,0.5);
          background: rgba(220,38,38,0.04);
        }
 
        .form-fields { display: flex; flex-direction: column; gap: 16px; }
 
        .submit-btn {
          width: 100%;
          margin-top: 8px;
          padding: 14px 24px;
          background: linear-gradient(135deg, #dc2626, #ea580c);
          border: none;
          border-radius: 10px;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 700;
          font-family: inherit;
          letter-spacing: 0.04em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          position: relative;
          overflow: hidden;
        }
        .submit-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ef4444, #f97316);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(220,38,38,0.4); }
        .submit-btn:hover::after { opacity: 1; }
        .submit-btn:active { transform: scale(0.98); }
        .submit-btn span, .submit-btn svg { position: relative; z-index: 1; }
      ` }} />

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-red-600/20 rounded-none blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-none blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 flex items-center gap-4">
                <span className="h-1 w-24 bg-gradient-to-r from-red-600 to-orange-600 rounded-none" />
                Get In Touch
              </h2>
              <p className="text-lg text-gray-300">
                Have a project in mind or want to discuss opportunities? Let&apos;s connect!
              </p>
            </motion.div>
            {/* Grid */}
            <div className="grid">
              {/* Left Column */}
              <div className="left-col anim-left">
                <h3>Contact Information</h3>

                <a href={`mailto:${SITE_CONFIG.email}`} className="contact-item">
                  <span className="ci-num">01</span>
                  <div className="ci-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width={18}
                      height={18}
                      fill="none"
                      stroke="#f87171"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="ci-body">
                    <div className="ci-label">Email</div>
                    <div className="ci-value">{SITE_CONFIG.email}</div>
                  </div>
                </a>

                <a href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`} className="contact-item">
                  <span className="ci-num">02</span>
                  <div className="ci-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width={18}
                      height={18}
                      fill="none"
                      stroke="#f87171"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l1.2-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="ci-body">
                    <div className="ci-label">Phone</div>
                    <div className="ci-value">{SITE_CONFIG.phone}</div>
                  </div>
                </a>

                <a href="#" className="contact-item">
                  <span className="ci-num">03</span>
                  <div className="ci-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width={18}
                      height={18}
                      fill="none"
                      stroke="#f87171"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="ci-body">
                    <div className="ci-label">Location</div>
                    <div className="ci-value">{SITE_CONFIG.location}</div>
                  </div>
                </a>

                <div className="avail">
                  <div className="avail-dot" />
                  Available for new projects
                </div>
              </div>

              {/* Right — Form Card */}
              <div className="form-card anim-form">
                <div className="form-fields">
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="name">Name</label>
                      <input id="name" type="text" placeholder="Your name" />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" type="text" placeholder="What's this about?" />
                  </div>

                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button className="submit-btn" type="button">
                    <span>Send Message</span>
                    <svg
                      viewBox="0 0 24 24"
                      width={16}
                      height={16}
                      fill="none"
                      stroke="#fff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
}
