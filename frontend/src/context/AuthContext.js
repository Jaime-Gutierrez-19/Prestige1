import React, { createContext, useContext, useState } from "react";

// Creamos el contexto de autenticación
const AuthContext = createContext();

// Componente proveedor de contexto
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función para loguear al usuario
  const login = () => setIsAuthenticated(true);

  // Función para desloguear al usuario
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAuth = () => useContext(AuthContext);
