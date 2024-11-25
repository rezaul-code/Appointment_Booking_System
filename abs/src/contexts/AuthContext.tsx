import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwt_decode(token);
        setUser(decoded);
        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem('token');
      }
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem('token', token);
    const decoded = jwt_decode(token);
    setUser(decoded);
    setIsAuthenticated(true);

    // Redirect based on role
    if (decoded.role === 'doctor') {
      navigate('/doctor/dashboard');
    } else if (decoded.role === 'visitor') {
      navigate('/visitor/dashboard');
    } else if (decoded.role === 'admin') {
      navigate('/admin/dashboard');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}