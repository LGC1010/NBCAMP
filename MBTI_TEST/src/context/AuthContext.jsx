import { createContext, useState } from 'react';

export const AuthContext = createContext();

const token = localStorage.getItem('accessToken');

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const login = (token) => {
    localStorage.setItem('accessToken', token);
    setIsAuthenticated(true);
  };

  const logout = (token) => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
