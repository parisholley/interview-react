import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserWelcome from '../components/UserWelcome';

// Challenge: This test is broken because the component uses useLoggedInUser hook
// which throws an error when there's no global state provider.
// The solution is to mock the useLoggedInUser hook using jest.mock()

describe('UserWelcome', () => {
  it('should show welcome message when button is clicked and user is logged in', () => {
    // This test will fail because useLoggedInUser() throws an error
    // when there's no global state context provider
    
    render(<UserWelcome />);

    // Click the button to show welcome message
    fireEvent.click(screen.getByTestId('show-welcome-button'));

    // Should show the welcome message for a logged in user
    expect(screen.getByTestId('welcome-message')).toBeInTheDocument();
    expect(screen.getByText('Welcome back, John Doe!')).toBeInTheDocument();
    expect(screen.getByText('User type: admin')).toBeInTheDocument();
  });

  it('should show login prompt when no user is logged in', () => {
    // This test will also fail for the same reason
    
    render(<UserWelcome />);

    fireEvent.click(screen.getByTestId('show-welcome-button'));

    expect(screen.getByTestId('welcome-message')).toBeInTheDocument();
    expect(screen.getByText('Please log in to continue')).toBeInTheDocument();
  });
});
