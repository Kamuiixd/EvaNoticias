import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, MobileStepper, useTheme } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const NewsCarousel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [items, setItems] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=84aaa44ac13c4af4ae63cf45fcd788ad`
        );
        const data = await response.json();
        if (data.articles) {
          const filteredArticles = data.articles
            .filter((article) => article.urlToImage) // Filtrar noticias con imágenes
            .slice(0, 5); // Limitar a 5 noticias
          setItems(
            filteredArticles.map((article) => ({
              label: article.title,
              description: article.description,
              imgPath: article.urlToImage,
            }))
          );
        }
      } catch (error) {
        console.error('Error al obtener noticias:', error);
      }
    };

    fetchNews();
  }, []);

  const maxSteps = items.length;

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  if (items.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h6">Cargando noticias...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: '100%',
        width: '100%',
        margin: 'auto',
        position: 'relative',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Box
        component="img"
        src={items[activeStep].imgPath}
        alt={items[activeStep].label}
        sx={{
          width: '100%',
          height: '80vh', // Cambiar la altura para que ocupe más espacio
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          p: 2,
          textAlign: 'left',
        }}
      >
        <Typography variant="h6" gutterBottom>
          {items[activeStep].label}
        </Typography>
        <Typography variant="body2">{items[activeStep].description}</Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
        }}
      >
        <IconButton
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={{
            color: 'white',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.8)' },
          }}
        >
          <KeyboardArrowLeft />
        </IconButton>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
        }}
      >
        <IconButton
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          sx={{
            color: 'white',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.8)' },
          }}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={null}
        backButton={null}
        sx={{
          bgcolor: 'transparent',
          justifyContent: 'center',
          '& .MuiMobileStepper-dot': {
            bgcolor: 'white',
            '&.MuiMobileStepper-dotActive': {
              bgcolor: theme.palette.primary.main,
            },
          },
        }}
      />
    </Box>
  );
};

export default NewsCarousel;
