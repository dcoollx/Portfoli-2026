import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile/Scrum'],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      {/* Passive floating element */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-cyan-100/20 to-teal-100/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-4xl w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-indigo-700">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: groupIndex * 0.2, duration: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{
                        delay: groupIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.5,
                      }}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}