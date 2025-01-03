import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto de usuario
const UserContext = createContext();

// Crear el proveedor de contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Cargar el usuario desde localStorage cuando la app se carga
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const saveUser = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));  // Guardamos el usuario completo
  };

  const logout = () => {
    setUser(null);  // Limpiamos el estado del usuario
    localStorage.removeItem('user');  // Eliminamos el usuario del localStorage
  };

  return (
    <UserContext.Provider value={{ user, saveUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para acceder al contexto
export const useUser = () => {
  return useContext(UserContext);
};
