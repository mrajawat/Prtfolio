'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'ERP Management System',
    description: 'Comprehensive enterprise resource planning platform designed for medium-sized organizations',
    details: 'Built a full-featured ERP system with modules for inventory, finance, HR, and reporting. Served 50+ organizations with 1000+ concurrent users.',
    tech: ['Laravel', 'MySQL', 'React', 'Docker', 'AWS'],
    achievements: ['25% performance improvement', 'Real-time reporting', 'Multi-tenant architecture'],
    featured: true,
  },
  {
    title: 'School Management Platform',
    description: 'All-in-one solution for managing educational institutions',
    details: 'Developed a complete school management system with student management, attendance tracking, grading, and parent portal.',
    tech: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript', 'Bootstrap'],
    achievements: ['30+ institutions', 'Mobile-responsive', 'Automated reports'],
    featured: true,
  },
  {
    title: 'REST API Platform',
    description: 'High-performance API gateway and microservices architecture',
    details: 'Created a scalable REST API platform handling 10k+ requests per day with caching, rate limiting, and comprehensive documentation.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Docker'],
    achievements: ['10k+ daily requests', '99.9% uptime', 'Comprehensive docs'],
    featured: true,
  },
  {
    title: 'Real Estate Management Platform',
    description: 'All-in-one solution for managing real estate properties and clients',
    details: 'Developed a complete real estate management system with property listing, client management, and booking management.',
    tech: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript', 'Bootstrap'],
    achievements: ['10+ properties', 'Mobile-responsive', 'Automated reports'],
    featured: true,
  },
];

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

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-orange-500/20 rounded-none blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-none blur-3xl" />
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
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300">
              Showcasing my most impactful work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="glass border border-white/10 hover:border-red-600/50 rounded-none overflow-hidden transition-all duration-300 h-full hover:shadow-2xl hover:shadow-red-600/20">
                  <div className="p-6 sm:p-8 h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>

                    <p className="text-gray-400 text-base mb-6 flex-grow">
                      {project.details}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-none" />
                            <span className="text-sm text-gray-400">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-red-600/20 to-orange-500/20 border border-red-400/30 text-red-300 text-xs rounded-none font-medium hover:border-red-400/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-red-600/50 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium hover:border-red-400/50 hover:bg-white/10 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
