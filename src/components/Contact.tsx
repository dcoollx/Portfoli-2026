import { motion, useInView } from 'motion/react';
import { Icon } from 'semantic-ui-react';
import { useRef } from 'react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: 'mail',
      label: 'Email',
      value: 'dsqjr@msn.com',
      href: 'mailto:dsqjr@msn.com',
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com',
      href: 'https://linkedin.com/in/davidqueenjr',
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: 'github',
      href: 'https://github.com/dcoollx',
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Get In Touch</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg mb-12 leading-relaxed"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out!
          </motion.p>
          <div className="space-y-6">
            {contactLinks.map((link, index) => {
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 hover:text-gray-900 transition-colors group"
                >
                  <Icon name={link.icon as 'github' | 'linkedin' | 'mail'} className="w-6 h-6" />
                  <span className="text-lg group-hover:underline">{link.value}</span>
                </motion.a>
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500"
          >
            <p>© 2026 David Queen. Built with React & Motion.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}