import React from 'react';

// Challenge: Complex TypeScript compilation errors involving discriminated unions,
// Pick/Omit utility types, and Extract for union filtering

// Discriminated union types for different user types
type AdminUser = {
  type: 'admin';
  id: number;
  name: string;
  email: string;
  permissions: string[];
  lastLogin: Date;
};

type RegularUser = {
  type: 'regular';
  id: number;
  name: string;
  email: string;
  subscriptionTier: 'free' | 'premium';
  usageCount: number;
};

type GuestUser = {
  type: 'guest';
  sessionId: string;
  name: string;
  tempEmail?: string;
  expiresAt: Date;
};

type User = AdminUser | RegularUser | GuestUser;

// Fixed: Using Extract to get users with email property (much cleaner!)
type AuthenticatedUser = Extract<User, { email: string }>;

// Fixed: Common properties that exist on all user types
type UserDisplayInfo = {
  name: string;
  email: string;
};

// Fixed: Update data type for authenticated users only
type UserUpdateData = {
  name: string;
  email: string;
};

// Fixed: Function expecting specific user type
function processAdminUser(admin: Extract<User, { type: 'admin' }>) {
  return {
    ...admin,
    permissionCount: admin.permissions.length,
    isRecentLogin: admin.lastLogin > new Date(Date.now() - 24 * 60 * 60 * 1000)
  };
}

// Helper function to check if user is authenticated (has email) - much simpler!
function isAuthenticatedUser(user: User): user is AuthenticatedUser {
  return 'email' in user;
}

interface Props {
  user: User;
  onUpdate: (data: UserUpdateData) => void;
  onProcessAdmin: (data: ReturnType<typeof processAdminUser>) => void;
}

const UserProfile: React.FC<Props> = ({ user, onUpdate, onProcessAdmin }) => {
  // Fixed: Proper type narrowing for display info
  const displayInfo: UserDisplayInfo = {
    name: user.name,
    email: isAuthenticatedUser(user) ? user.email : user.tempEmail || 'N/A',
  };

  const handleUpdate = () => {
    // Fixed: Only allow updates for authenticated users
    if (isAuthenticatedUser(user)) {
      const updateData: UserUpdateData = {
        name: user.name,
        email: user.email
      };
      onUpdate(updateData);
    }
  };

  const handleAdminProcess = () => {
    // Fixed: Proper type narrowing for admin processing
    if (user.type === 'admin') {
      const processed = processAdminUser(user); // Now properly typed
      onProcessAdmin(processed);
    }
  };

  // Error 7: Type narrowing issues in render
  return (
    <div>
      <h2>{displayInfo.name}</h2>
      <p>{displayInfo.email}</p>

      {/* This should show different UI based on user type */}
      {user.type === 'admin' && (
        <div>
          <p>Permissions: {user.permissions.length}</p>
          <p>Last Login: {user.lastLogin.toISOString()}</p>
          <button onClick={handleAdminProcess}>Process Admin</button>
        </div>
      )}

      {user.type === 'regular' && (
        <div>
          <p>Subscription: {user.subscriptionTier}</p>
          <p>Usage: {user.usageCount}</p>
        </div>
      )}

      {user.type === 'guest' && (
        <div>
          <p>Session: {user.sessionId}</p>
          <p>Expires: {user.expiresAt.toISOString()}</p>
        </div>
      )}

      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default UserProfile;
