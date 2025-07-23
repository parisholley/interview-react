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

// Error 1: Pick from union doesn't work as expected - lacks discriminator
type UserDisplayInfo = Pick<User, 'name' | 'email' | 'phone'>; // Error: 'phone' doesn't exist, 'email' might not exist

// Error 2: Omit from union creates issues with discriminated fields
type UserUpdateData = Omit<User, 'id' | 'createdAt'>; // Error: 'createdAt' doesn't exist, wrong approach for unions

// Error 3: Function expecting specific user type but getting broad union
function processAdminUser(admin: AdminUser) {
  return {
    ...admin,
    permissionCount: admin.permissions.length,
    isRecentLogin: admin.lastLogin > new Date(Date.now() - 24 * 60 * 60 * 1000)
  };
}

// Error 4: Trying to use Extract incorrectly
type NonGuestUsers = Extract<User, { type: 'admin' | 'regular' }>; // Wrong syntax

interface Props {
  user: User;
  onUpdate: (data: UserUpdateData) => void;
  onProcessAdmin: (data: ReturnType<typeof processAdminUser>) => void;
}

const UserProfile: React.FC<Props> = ({ user, onUpdate, onProcessAdmin }) => {
  // Error 5: Trying to access union properties without type narrowing
  const displayInfo: UserDisplayInfo = {
    name: user.name,
    email: user.email, // Error: email doesn't exist on GuestUser consistently
  };

  const handleUpdate = () => {
    const updateData: UserUpdateData = user; // Error: User union can't be assigned to UserUpdateData
    onUpdate(updateData);
  };

  const handleAdminProcess = () => {
    // Error 6: Passing union to function expecting specific type
    if (user.type === 'admin') {
      const processed = processAdminUser(user); // Should work but needs proper typing
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
