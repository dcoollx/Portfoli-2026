import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import Layout from './components/Layout';
import { A11y } from './components/A11y';

export const App: React.FC = () => 
(
  <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
    <Layout>
      {/* Additional subtle gradient overlays for depth */}
      <div className="fixed inset-0 bg-gradient-to-tr from-purple-50/20 via-transparent to-pink-50/20 pointer-events-none" />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Timeline />
          <Projects />
          <Contact />
        </main>
      </div>
    </Layout>
    <A11y />
    </div>
  );



export default App;