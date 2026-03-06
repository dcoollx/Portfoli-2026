import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Icon, Divider } from 'semantic-ui-react'

const experiences = [
  {
    position: 'Software Engineer L4',
    company: 'Audioeye',
    dates: 'Jan 2024 - Feb 2026',
    details: [
      'Lead a team of 3 developers in building an integration with our CRM, to handle transactional emails',
      'Reduced new user onboarding time by 30% through implementing a user invitation system',
      'Mentor junior developers and conduct code reviews',
      'Creaated CAPA process for production incidents, reducing resolution time by 25%',
    ],
  },
  {
    position: 'Software Engineer L3',
    company: 'Audioeye',
    dates: 'Jan 2022 - Jan 2024',
    details: [
      'Developed and maintained self hosted chrome extension for accessibility testing',
      'Collaborated with UX team to intergrate new deign libraries',
      'Built RESTful APIs serving 50k+ daily active users',
      'Assisted in development of customer-facing web portal',
    ],
  },
  {
    position: ' Junior Software Engineer',
    company: 'Audioeye',
    dates: 'May 2021 - Jan 2022',
    details: [
      'Built responsive web applications using modern JavaScript frameworks Gatsby and NestJS',
      'Participated in agile development process and daily standups',
      'Fixed bugs and implemented new features based on user feedback',
      'Contributed to internal documentation and knowledge sharing',
    ],
  },
   {
    position: 'Software Developer in Test (SDET)',
    company: 'Audioeye',
    dates: 'Jan 2021 - May 2021',
    details: [
      'Implemented automated testing suite, increasing code coverage to 85%',
      'Participated in agile development process and daily standups',
      'Fixed bugs and implemented new features based on user feedback',
      'Contributed to internal documentation and knowledge sharing',
    ],
  },
  {
    position: 'Accessibility Implementation Developer',
    company: 'Audioeye',
    dates: 'Jan 2020 - Jan 2021',
    details: [
      
      'Brought more than 65 client sites into compliance with WCAG 2.1 standards, improving accessibility for millions of users',
      'Created custom accessibility solutions for clients with unique needs, such as e-commerce sites and government agencies',
      'Developed custom tooling to automate accessibility audits, reducing manual testing time by 40%',
    ],
  },
];

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (

    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <Divider />
      {/* Passive floating element */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-br from-emerald-100/20 to-lime-100/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-4xl w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#4183c4]">Experience</h2>
          <div className="relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${index}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  onMouseEnter={() => setExpandedIndex(index)}
                  onMouseLeave={() => setExpandedIndex(null)}
                  className="relative pl-12 md:pl-20 cursor-pointer"
                >
                  {/* Timeline dot */}
                  <motion.div
                    animate={{
                      scale: expandedIndex === index ? 1.3 : 1,
                      backgroundColor: expandedIndex === index ? '#1f2937' : '#9ca3af',
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg"
                  />

                  {/* Content card */}
                  <motion.div
                    animate={{
                      scale: expandedIndex === index ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-gray-200 hover:border-gray-400 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        animate={{
                          rotate: expandedIndex === index ? 360 : 0,
                        }}
                        transition={{ duration: 0.6 }}
                        className="p-3 bg-gray-100 rounded-lg"
                      >
                        <Icon name="briefcase" className="w-5 h-5 text-gray-700" />
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{exp.position}</h3>
                        <p className="text-gray-600 mb-2">{exp.company}</p>
                        <p className="text-sm text-gray-500 mb-4">{exp.dates}</p>

                        {/* Expandable details */}
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: expandedIndex === index ? 'auto' : 0,
                            opacity: expandedIndex === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-2 mt-4 pt-4 border-t border-gray-200">
                            {exp.details.map((detail, detailIndex) => (
                              <motion.li
                                key={detailIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{
                                  opacity: expandedIndex === index ? 1 : 0,
                                  x: expandedIndex === index ? 0 : -10,
                                }}
                                transition={{
                                  delay: expandedIndex === index ? detailIndex * 0.1 : 0,
                                  duration: 0.3,
                                }}
                                className="flex items-start gap-2 text-gray-600 text-sm"
                              >
                                <span className="text-gray-400 mt-1">•</span>
                                <span>{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}