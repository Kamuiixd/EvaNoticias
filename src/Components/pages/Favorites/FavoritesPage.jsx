// src/Components/pages/Favorites/FavoritesPage.jsx

import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useFavorites } from '../../pages/Favorites/FavoritesContext'; // Importar el contexto

const FavoritesPage = () => {
  const { favorites } = useFavorites(); // Obtener los favoritos del contexto

  if (favorites.length === 0) {
    return (
      <Box sx={{ color: 'Black', textAlign: 'center', mt: 5 }}>
        <Typography variant="h6">No tienes favoritos.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Noticias Favoritas
      </Typography>
      {favorites.map((article, index) => (
        <Card key={index} sx={{ display: 'flex', marginBottom: 2, alignItems: 'center' }}>
          <CardMedia
            component="img"
            alt={article.title}
            image={article.urlToImage || '/static/images/placeholder.jpg'}
            sx={{ width: 150, height: 100 }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article.description || 'No hay descripción disponible.'}
            </Typography>
            <Button
              variant="contained"
              size="small"
              color="primary"
              href={article.url}
              target="_blank"
              sx={{ mt: 1 }}
            >
              Leer Más
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default FavoritesPage;
