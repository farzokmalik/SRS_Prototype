import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { name: string; role: string; email: string } | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Default demo credentials
const DEMO_USER = {
  email: 'admin@splendidmark.com',
  password: 'srsprototype',
  name: 'Dr. Khalid',
  role: 'Admin Officer — P&D Board',
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthContextType['user']>(null);

  const login = (email: string, password: string): boolean => {
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      setUser({ name: DEMO_USER.name, role: DEMO_USER.role, email: DEMO_USER.email });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
