import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserWelcome from './UserWelcome';

describe('UserWelcome', () => {
  it('should show welcome message when button is clicked and user is logged in', () => {
    render(<UserWelcome />);

    // Click the button to show welcome message
    fireEvent.click(screen.getByTestId('show-welcome-button'));

    // Should show the welcome message for a logged in user
    expect(screen.getByTestId('welcome-message')).toBeInTheDocument();
    expect(screen.getByText('Welcome back, John Doe!')).toBeInTheDocument();
    expect(screen.getByText('User type: admin')).toBeInTheDocument();
  });

  it('should show login prompt when no user is logged in', () => {
    render(<UserWelcome />);

    fireEvent.click(screen.getByTestId('show-welcome-button'));

    expect(screen.getByTestId('welcome-message')).toBeInTheDocument();
    expect(screen.getByText('Please log in to continue')).toBeInTheDocument();
  });
});
