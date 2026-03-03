// a transparent card component with a frosted glass effect
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children }) => (
  <div style={{ padding: '55px'}} className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-sm p-6 border border-white border-opacity-30">
    {children}
  </div>
);