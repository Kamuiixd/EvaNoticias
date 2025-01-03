import React, { useEffect, useState } from 'react';
import {Box,Button,Card,CardContent,CardMedia,Typography,Pagination,IconButton,} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material'; 
import { useFavorites } from '../../pages/Favorites/FavoritesContext'; 

const PaginatedNewsCards = ({ category }) => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 5; // Número de noticias por página

  // Obtener el contexto de favoritos
  const { favorites, toggleFavorite } = useFavorites();

  // Fetch noticias basadas en la categoría
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=84aaa44ac13c4af4ae63cf45fcd788ad`
        );
        const data = await response.json();
        if (data.articles) {
          setNews(data.articles);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  // Calcular las noticias para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(news.length / itemsPerPage);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) {
    return (
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h6">Cargando noticias...</Typography>
      </Box>
    );
  }

  if (news.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h6">No hay noticias disponibles en esta categoría.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', p: 2 }}>
      {currentNews.map((article, index) => {
        const isFavorite = favorites.some(fav => fav.url === article.url); // Verificar si la noticia está en los favoritos

        return (
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

              {/* Botón de favoritos */}
              <IconButton
                onClick={() => toggleFavorite(article)} // Llamar a la función de toggleFavorite para agregar/eliminar de favoritos
                color={isFavorite ? 'error' : 'default'} // Cambiar el color dependiendo de si es favorito
                sx={{ mt: 1, ml: 2 }}
              >
                {isFavorite ? <Favorite /> : <FavoriteBorder />} {/* Mostrar el ícono correspondiente */}
              </IconButton>
            </CardContent>
          </Card>
        );
      })}

      {/* Controles de Paginación */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default PaginatedNewsCards;
