import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto de favoritos
const FavoritesContext = createContext();

// Proveedor del contexto
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Función para agregar o eliminar favoritos
  const toggleFavorite = (article) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some(fav => fav.url === article.url)) {
        // Si el artículo ya está en favoritos, lo eliminamos
        return prevFavorites.filter(fav => fav.url !== article.url);
      } else {
        // Si no está en favoritos, lo agregamos
        return [...prevFavorites, article];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook para acceder al contexto
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
