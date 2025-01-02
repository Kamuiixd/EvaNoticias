import React, { createContext, useState, useContext } from 'react';

// Crear el contexto para el estado de búsqueda
const SearchContext = createContext();

// Proveedor para el contexto de búsqueda
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom Hook para usar el contexto
export const useSearch = () => useContext(SearchContext);
