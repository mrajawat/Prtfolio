'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    period: '2024 - Present',
    title: 'Senior Backend Developer',
    company: 'Tech Solutions Inc.',
    achievements: [
      'Lead backend architecture for microservices platform serving 100k+ users',
      'Improved API response time by 40% through optimization and caching strategies',
      'Mentored junior developers and established coding best practices',
    ],
  },
  {
    period: '2022 - 2024',
    title: 'Full Stack Developer',
    company: 'Digital Systems Ltd.',
    achievements: [
      'Developed ERP system serving 50+ organizations',
      'Achieved 25% performance improvement in critical database queries',
      'Built REST APIs handling 10k+ requests per day',
    ],
  },
  {
    period: '2021 - 2022',
    title: 'Junior Backend Developer',
    company: 'StartUp Innovations',
    achievements: [
      'Developed school management system used by 30+ institutions',
      'Worked with Laravel and MySQL to build robust database solutions',
      'Collaborated with cross-functional teams in an agile environment',
    ],
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-16 flex items-center gap-3"
          >
            <span className="h-1 w-16 bg-primary rounded-full" />
            Experience
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-24 bg-gradient-to-b from-primary to-primary/20" />
                )}

                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold"
                      whileHover={{ scale: 1.2 }}
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-foreground/60">{exp.company}</p>
                        </div>
                        <span className="text-sm font-medium text-primary whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-foreground/70">{achievement}</span>
                          </li>
                        ))}
                      </ul>
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
