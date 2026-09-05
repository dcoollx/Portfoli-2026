export interface skill {
  category: string;
  items: string[]; 
}

export const skills: skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'I18n', 'A11y'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'Express.js', 'REST APIs', 'NestJS', 'Go', 'C# .NET'],
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile/Scrum', 'AI'],
  },
  {
    category: 'Integrations & APIs',
    items: ['Zoho CRM', 'BigIn', 'Hubspot', 'Stripe API', 'Twilio API'],
  },
];
