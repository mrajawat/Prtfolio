'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Backend',
    skills: ['PHP', 'Laravel', 'CodeIgniter', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'Frontend',
    skills: ['JavaScript', 'ES6+', 'React', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools & Cloud',
    skills: ['Git', 'Docker', 'AWS', 'Linux', 'Nginx'],
  },
  {
    category: 'AI & Dev Tools',
    skills: ['Antigravity', 'ChatGPT', 'Cursor', 'Postman', 'Supabase', 'Vercel', 'Netlify'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/20 rounded-none blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-none blur-3xl" />
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
              Technical Skills
            </h2>
            <p className="text-lg text-gray-300">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group flex-1"
              >
                <div className="glass border border-white/10 hover:border-red-600/50 rounded-none p-6 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20">
                  <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-red-300 transition-colors">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <motion.li
                        key={skill}
                        className="flex items-center text-gray-300 text-sm"
                        whileHover={{ x: 5 }}
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-none mr-3" />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
