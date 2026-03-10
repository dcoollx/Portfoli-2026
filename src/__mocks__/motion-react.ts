import React from 'react';

const motionTags = [
  'div', 'p', 'h1', 'h2', 'a', 'button', 'span', 'section', 'article', 'header', 'footer',
];

const motion: any = {};

motionTags.forEach(tag => {
  motion[tag] = React.forwardRef(({ children, whileHover, whileTap, initial, animate, transition, ...props }: any, ref) => (
    React.createElement(tag, { ...props, ref }, children)
  ));
});

export { motion };
