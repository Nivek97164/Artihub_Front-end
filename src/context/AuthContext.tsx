"use client";
import { createContext, useState, useContext, ReactNode } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  isArtisan: boolean; // Ajoute ça
  login: () => void;
  logout: () => void;
  setArtisan: (artisan: boolean) => void; // Ajoute ça aussi
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isArtisan, setIsArtisan] = useState(false); // Ajoute ça

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    setIsArtisan(false);
  };

  const setArtisan = (artisan: boolean) => setIsArtisan(artisan); // Ajoute ça

  return (
    <AuthContext.Provider value={{ isAuthenticated, isArtisan, login, logout, setArtisan }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
