import React from 'react';
import { render } from '@testing-library/react';
import { Hero } from '../Hero';

describe('Hero component', () => {
  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(<Hero />);
    expect(asFragment()).toMatchSnapshot();
  });
});
