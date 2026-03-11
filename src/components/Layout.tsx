import React from 'react';
import { Background } from './Background';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  < >
      <title>David Queen Jr - Software Engineer</title>
      <meta name="description" content="David Queen Jr's portfolio showcasing software engineering projects, skills, and experience." />
      <meta name="keywords" content="David Queen Jr, software engineer, portfolio, projects, skills, experience" />
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="/favicon/site.webmanifest"></link>
    <Background>
    {children}
    </Background>
    </>
);

export default Layout;