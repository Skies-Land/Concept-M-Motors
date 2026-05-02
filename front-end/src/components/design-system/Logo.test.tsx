import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logo from './Logo';
import { describe, it, expect } from 'vitest';

describe('Logo Component', () => {
  it('renders the logo text correctly', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
    
    const logoElement = screen.getByText(/M-MOTORS/i);
    expect(logoElement).toBeInTheDocument();
  });

  it('has the correct link to the home page', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
    
    const logoLink = screen.getByRole('link');
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
