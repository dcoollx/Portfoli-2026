import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-indigo-700">About Me</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg"
            >
              I'm a mid-level software engineer with 6+ years of experience building web
              applications that users love. My journey in tech started with a curiosity
              about how things work, and has evolved into a career focused on creating
              intuitive, performant solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg"
            >
              I thrive in collaborative environments where I can contribute to both the
              technical architecture and user experience. When I'm not coding, you'll find
              me exploring new technologies, contributing to open source, or hiking in the
              great outdoors.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}