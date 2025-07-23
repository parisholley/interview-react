jest.mock('../hooks/useGlobalState', () => ({
  useLoggedInUser: jest.fn()
}));

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserWelcome from '../components/UserWelcome';
import { useLoggedInUser } from '../hooks/useGlobalState';

describe('UserWelcome', () => {
  const mockUseLoggedInUser = useLoggedInUser as jest.Mock;

  it('should show welcome message when button is clicked and user is logged in', () => {
    mockUseLoggedInUser.mockReturnValue({
      type: 'admin',
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      permissions: ['read', 'write'],
      lastLogin: new Date()
    });

    render(<UserWelcome />);

    // Click the button to show welcome message
    fireEvent.click(screen.getByTestId('show-welcome-button'));

    // Should show the welcome message for a logged in user
    expect(screen.getByTestId('welcome-message')).toBeInTheDocument();
    expect(screen.getByText('Welcome back, John Doe!')).toBeInTheDocument();
    expect(screen.getByText('User type: admin')).toBeInTheDocument();
  });

  it('should show login prompt when no user is logged in', () => {
    const mockUseLoggedInUser = useLoggedInUser as jest.Mock;
    mockUseLoggedInUser.mockReturnValue(null);

    render(<UserWelcome />);

    fireEvent.click(screen.getByTestId('show-welcome-button'));

    expect(screen.getByTestId('welcome-message')).toBeInTheDocument();
    expect(screen.getByText('Please log in to continue')).toBeInTheDocument();
  });
});
