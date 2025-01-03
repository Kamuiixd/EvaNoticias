import React, { createContext, useContext, useState } from 'react';

// Crear el contexto para la configuración
const SettingsContext = createContext();

// Componente proveedor para envolver la aplicación y proporcionar el contexto de configuración
export const SettingsProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para el tema oscuro

  // Función para alternar el tema
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <SettingsContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </SettingsContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de configuración
export const useSettings = () => {
  return useContext(SettingsContext);
};
