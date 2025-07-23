import React from 'react';

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

type DisplayData = Pick<User, 'name' | 'email' | 'phone'>;
type UpdateData = Omit<User, 'id' | 'createdAt'>;

function processSpecialUser(admin: AdminUser) {
  return {
    ...admin,
    permissionCount: admin.permissions.length,
    isRecentLogin: admin.lastLogin > new Date(Date.now() - 24 * 60 * 60 * 1000)
  };
}

type AuthenticatedUsers = Extract<User, { type: 'admin' | 'regular' }>;

interface Props {
  user: User;
  onUpdate: (data: UpdateData) => void;
  onProcess: (data: ReturnType<typeof processSpecialUser>) => void;
}

const UserProfile: React.FC<Props> = ({ user, onUpdate, onProcess }) => {
  const displayInfo: DisplayData = {
    name: user.name,
    email: user.email,
  };

  const handleUpdate = () => {
    const updateData: UpdateData = user;
    onUpdate(updateData);
  };

  const handleProcess = () => {
    if (user.type === 'admin') {
      const processed = processSpecialUser(user);
      onProcess(processed);
    }
  };

  return (
    <div>
      <h2>{displayInfo.name}</h2>
      <p>{displayInfo.email}</p>
      
      {user.type === 'admin' && (
        <div>
          <p>Permissions: {user.permissions.length}</p>
          <p>Last Login: {user.lastLogin.toISOString()}</p>
          <button onClick={handleProcess}>Process</button>
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
