import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { A11y } from '../A11y';

describe('A11y component', () => {
  it('renders accessibility button and modal is hidden by default', () => {
    render(<A11y />);

    const openButton = screen.getByRole('button', { name: /open accessibility tools/i });
    expect(openButton).toBeInTheDocument();

    expect(screen.queryByText(/accessibility tools/i)).not.toBeInTheDocument();
  });

  it('opens and closes modal when clicking control buttons', async () => {
    const user = userEvent.setup();
    render(<A11y />);

    const openButton = screen.getByRole('button', { name: /open accessibility tools/i });
    await user.click(openButton);

    const heading = await screen.findByText(/accessibility tools/i);
    expect(heading).toBeInTheDocument();

    // Semantic UI close icon button may not expose a label. select the first icon button in modal.
    const closeButton = screen.getAllByRole('button', { hidden: true }).find(btn => btn.className.includes('ui icon button'));
    expect(closeButton).toBeTruthy();
    if (closeButton) {
      await user.click(closeButton);
      expect(screen.queryByText(/accessibility tools/i)).not.toBeInTheDocument();
    }
  });

  it('matches snapshot with opened modal', async () => {
    const user = userEvent.setup();
    const view = render(<A11y />);

    const openButton = screen.getByRole('button', { name: /open accessibility tools/i });
    await user.click(openButton);

    expect(view.asFragment()).toMatchSnapshot();
  });
});
