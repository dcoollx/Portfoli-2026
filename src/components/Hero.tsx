import { motion } from 'motion/react';
import { Icon } from 'semantic-ui-react';
import { ChatBox } from './ChatBox';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Floating background elements for passive movement */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-100/30 to-blue-100/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-100/30 to-orange-100/30 rounded-full blur-3xl"
      />

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-600 mb-4"
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-indigo-700"
          >
            David Queen
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl text-indigo-600/80 mb-8"
          >
            Software Engineer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed mb-12"
          >
            I craft elegant solutions to complex problems, specializing in full-stack
            development with a passion for creating seamless user experiences.
          </motion.p>

          {/* AI Chatbox */}
          <ChatBox />
        </motion.div>
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Icon name="arrow down" className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.button>
    </section>
  );
}