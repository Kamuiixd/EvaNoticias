import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto para la búsqueda
const SearchContext = createContext();

// Componente proveedor para envolver la aplicación y proporcionar el contexto de búsqueda
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Función para actualizar la consulta de búsqueda
  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, updateSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

// Hook para acceder fácilmente al contexto de búsqueda
export const useSearch = () => useContext(SearchContext);
