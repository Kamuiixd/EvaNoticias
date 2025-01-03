import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';  // Hook para acceder a los parámetros de la URL
import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import SearchInput from './SearchInput';  // Lo mantenemos por si lo necesitas

const SearchPage = () => {
  const [searchParams] = useSearchParams();  // Obtenemos los parámetros de la URL
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchQuery = searchParams.get('q') || '';  // Obtenemos el valor de 'q'

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=84aaa44ac13c4af4ae63cf45fcd788ad`
        );
        const data = await response.json();
        setSearchResults(data.articles || []);
      } catch (error) {
        console.error('Error al obtener los resultados de búsqueda:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Buscar Noticias
      </Typography>

      {/* Input de búsqueda si se quiere mostrar */}
      {/* <SearchInput /> */}

      <Box sx={{ marginTop: 3 }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Typography variant="h6">Resultados para: "{searchQuery}"</Typography>
            {searchResults.length === 0 ? (
              <Paper sx={{ padding: 2, marginTop: 2 }}>
                <Typography>No se encontraron noticias.</Typography>
              </Paper>
            ) : (
              searchResults.map((article, index) => (
                <Paper sx={{ padding: 2, marginTop: 2 }} key={index}>
                  <Typography variant="h6">{article.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.description}
                  </Typography>
                </Paper>
              ))
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default SearchPage;
