import { FC, PropsWithChildren, createContext, useState } from 'react';

import { IAdmin } from '@/types';

//ToDo: add singIn and signOut fn type
interface AuthContextType {
  user: IAdmin | null;
  signin: () => void;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

const localStorageKey = 'admin';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IAdmin | null>(() => {
    const admin = localStorage.getItem(localStorageKey);
    return admin ? JSON.parse(admin) : null;
  });

  const signin = () => {
    //ToDo: change to request for sing in
    const admin = { id: 'admin', name: 'admin' };
    localStorage.setItem(localStorageKey, JSON.stringify(admin));
    setUser(admin);
  };

  const signout = () => {
    //ToDo: add request for sign out
    localStorage.removeItem(localStorageKey);
    setUser(null);
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};