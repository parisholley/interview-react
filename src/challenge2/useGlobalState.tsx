import {createContext, ReactElement, useContext} from 'react';
import {AdminUser, RegularUser, User} from "../challenge1/types";

interface GlobalState {
  currentUser: AdminUser | RegularUser | null;
  theme: 'light' | 'dark';
  isAuthenticated: boolean;
}

const GlobalStateContext = createContext<GlobalState | null>(null);

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a <GlobalStateProvider />');
  }
  return context;
};

export const useLoggedInUser = () => {
  const state = useGlobalState();

  if (!state.isAuthenticated || !state.currentUser) {
    return null;
  }

  return state.currentUser;
};

export function GlobalStateProvider({state, children}:{state:GlobalState; children:ReactElement}){
  return <GlobalStateContext.Provider value={state}>{children}</GlobalStateContext.Provider>
}
