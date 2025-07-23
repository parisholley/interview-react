import React, { useState } from 'react';

const UserReports: React.FC = () => {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    // This error should be caught by the ErrorBoundary in UsersPage, but it won't be
    throw new Error('User reports failed to load!');
  }

  return (
    <div>
      <h2>User Reports</h2>
      <p>This page contains user analytics and reports.</p>
      
      <button 
        onClick={() => setShouldError(true)}
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#e74c3c', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px' 
        }}
      >
        Trigger Error (should be caught by users section)
      </button>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Report Data</h3>
        <ul>
          <li>Total Users: 1,234</li>
          <li>Active Users: 987</li>
          <li>New Signups This Month: 45</li>
        </ul>
      </div>
    </div>
  );
};

export default UserReports;
