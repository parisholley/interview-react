import { useState, createContext, useContext } from 'react';

// User types from the TypeScript challenge
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

interface GlobalState {
  currentUser: User | null;
  theme: 'light' | 'dark';
  isAuthenticated: boolean;
}

const GlobalStateContext = createContext<{
  state: GlobalState;
  setState: (state: Partial<GlobalState>) => void;
} | null>(null);

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

// Hook that depends on global state - this is what should be mocked in tests
export const useLoggedInUser = () => {
  const { state } = useGlobalState();
  
  if (!state.isAuthenticated || !state.currentUser) {
    return null;
  }
  
  return state.currentUser;
};

export { GlobalStateContext };
export type { User, AdminUser, RegularUser, GuestUser };
