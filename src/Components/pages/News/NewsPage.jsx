import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import NewsCarousel from './NewsCarousel'; // Componente carrusel

// Lista de categorías
const categories = [
  { name: 'Negocios', path: 'business' },
  { name: 'Entretenimiento', path: 'entertainment' },
  { name: 'Salud', path: 'health' },
  { name: 'Ciencia', path: 'science' },
  { name: 'Deportes', path: 'sports' },
  { name: 'Tecnología', path: 'technology' },
];

function NewsPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        padding: { xs: 2, md: 4 },
      }}
    >
      {/* Título de la página */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: theme.palette.text.primary,
          marginBottom: 4,
        }}
      >
      </Typography>

      {/* Categorías */}
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: theme.palette.text.secondary,
            marginBottom: 2,
          }}
        >
        </Typography>
        <Box
          sx={{
            display: 'inline-flex',
            gap: 0,
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((category, index) => (
            <React.Fragment key={category.path}>
              <Link
                to={`/category/${category.path}`}
                style={{
                  textDecoration: 'none',
                  color: theme.palette.primary.main,
                  fontWeight: 'bold',
                  margin: '0 8px',
                }}
              >
                {category.name}
              </Link>
              {index < categories.length - 1 && (
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.text.secondary,
                    margin: '0 8px',
                  }}
                >
                  -
                </Typography>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>

      {/* Espaciado entre categorías y carrusel */}
      <Box sx={{ marginTop: 6, marginBottom: 4 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: theme.palette.text.primary,
          }}
        >
          Noticias Destacadas
        </Typography>
      </Box>

      {/* Carrusel */}
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <NewsCarousel />
      </Box>
    </Box>
  );
}

export default NewsPage;
