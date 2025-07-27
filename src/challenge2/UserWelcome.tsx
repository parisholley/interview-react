import React, { useState } from 'react';
import { useLoggedInUser } from './useGlobalState';

/**
 * NOTE: As a part of challenge 2, you are NOT allowed to modify this file.
 */
const UserWelcome: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const currentUser = useLoggedInUser();

  const handleShowWelcome = () => {
    setShowWelcome(true);
  };

  return (
    <div>
      <button
        onClick={handleShowWelcome}
        data-testid="show-welcome-button"
      >
        Show Welcome Message
      </button>

      {showWelcome && (
        <div data-testid="welcome-message">
          {currentUser ? (
            <div>
              <h2>Welcome back, {currentUser.name}!</h2>
              <p>User type: {currentUser.type}</p>
              {currentUser.type === 'regular' && (
                <p>Subscription: {currentUser.subscriptionTier}</p>
              )}
            </div>
          ) : (
            <p>Please log in to continue</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserWelcome;
