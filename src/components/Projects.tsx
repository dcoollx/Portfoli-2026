import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Icon } from 'semantic-ui-react'
import { ImageWithFallback } from '../images/fallback';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1763872038252-e6c4e0a11067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZSUyMHN0b3JlfGVufDF8fHx8MTc3MjI5MDk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    details: 'Built with scalability in mind, handling 10k+ concurrent users. Integrated payment gateways and real-time analytics.',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative task management tool with real-time updates, drag-and-drop interface, and team analytics.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1758876202468-5ffe0ee61f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGthbmJhbiUyMGJvYXJkfGVufDF8fHx8MTc3MjMzMzE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    details: 'Features include real-time collaboration, customizable workflows, and comprehensive team performance metrics.',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Beautiful weather visualization app with location-based forecasts, interactive maps, and weather alerts.',
    technologies: ['Vue.js', 'Tailwind CSS', 'Weather API', 'Chart.js'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1530563885674-66db50a1af19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwZm9yZWNhc3QlMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzcyMzMzMTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    details: 'Provides hourly and 7-day forecasts with interactive charts, severe weather notifications, and location tracking.',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      {/* Passive floating element */}
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-br from-indigo-100/20 to-violet-100/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-4xl w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#4183c4]">Featured Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group"
              >
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 transition-colors shadow-2xl">
                  {/* Image Section */}
                  <div 
                    className="relative overflow-hidden cursor-pointer"
                    onMouseEnter={() => setExpandedProject(index)}
                    onMouseLeave={() => setExpandedProject(null)}
                  >
                    <motion.div
                      animate={{
                        scale: expandedProject === index ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>
                    
                    {/* Overlay with details on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: expandedProject === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex items-end p-6"
                    >
                      <p className="text-white text-sm leading-relaxed">
                        {project.details}
                      </p>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-semibold group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9, rotate: -5 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                          className="text-gray-500 hover:text-gray-900 transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Icon name="github" className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          whileTap={{ scale: 0.9, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                          className="text-gray-500 hover:text-gray-900 transition-colors"
                          aria-label="View live project"
                        >
                          <Icon name="chain" className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
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