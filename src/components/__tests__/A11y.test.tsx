import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { A11y } from '../A11y';

describe('A11y component', () => {
  it('renders accessibility button and modal is hidden by default', () => {
    render(<A11y />);

    const openButton = screen.getByRole('button', { name: /open accessibility tools/i });
    expect(openButton).toBeInTheDocument();

    expect(screen.queryByTestId('a11y-modal-header')).not.toBeInTheDocument();
  });

  it.skip('opens and closes modal when clicking control buttons', async () => {
    const user = userEvent.setup();
    render(<A11y />);

    const openButton = screen.getByRole('button', { name: /open accessibility tools/i });
    await user.click(openButton);

    const closeButton = screen.getByRole('button', { name: /close accessibility tools/i });
    expect(closeButton).toBeInTheDocument();
    await user.click(closeButton);
    expect(screen.queryByTestId('a11y-modal-header')).not.toBeInTheDocument();
  });

  it('matches snapshot with opened modal', async () => {
    const user = userEvent.setup();
    const view = render(<A11y />);

    const openButton = screen.getByRole('button', { name: /open accessibility tools/i });
    await user.click(openButton);

    expect(view.asFragment()).toMatchSnapshot();
  });
});
