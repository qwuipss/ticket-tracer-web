import { ReactNode, useEffect, useState } from "react";

import { AuthContext } from "../types/Types";

import { User } from "../types/Types";

export const AuthProvider = ({ children } : { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    useEffect(() => {
      const user = localStorage.getItem('user');
      setIsAuthenticated(!!user);
    }, []);
  
    const login = (user: User) => {
      localStorage.setItem('user', JSON.stringify(user));
      setIsAuthenticated(true);
    };
  
    const logout = () => {
      localStorage.removeItem('user');
      setIsAuthenticated(false);
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };

export default AuthProvider;