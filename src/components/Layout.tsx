import React from 'react';
import { Container } from 'semantic-ui-react';
import { Helmet} from 'react-helmet';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Container style={{ marginTop: '2em' }} >
    <Helmet>
      <title>David Queen Jr - Software Engineer</title>
      <meta name="description" content="David Queen Jr's portfolio showcasing software engineering projects, skills, and experience." />
      <meta name="keywords" content="David Queen Jr, software engineer, portfolio, projects, skills, experience" />
    </Helmet>
    {children}
    </Container>
);

export default Layout;