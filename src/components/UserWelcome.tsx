import React, { useState } from 'react';
import { useLoggedInUser } from '../hooks/useGlobalState';

const UserWelcome: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const currentUser = useLoggedInUser(); // This will throw if no global state provider

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
              {currentUser.type === 'admin' && (
                <p>You have {currentUser.permissions.length} permissions</p>
              )}
              {currentUser.type === 'regular' && (
                <p>Subscription: {currentUser.subscriptionTier}</p>
              )}
              {currentUser.type === 'guest' && (
                <p>Session ID: {currentUser.sessionId}</p>
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
