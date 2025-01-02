import React, { useState, useEffect } from 'react';
import { Box, Paper, IconButton, Typography, MobileStepper } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const NewsCarousel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [items, setItems] = useState([]);

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
    <Box sx={{ maxWidth: 800, flexGrow: 1, margin: 'auto' }}>
      <Paper
        square
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 2,
          bgcolor: 'background.default',
        }}
      >
        <img
          src={items[activeStep].imgPath}
          alt={items[activeStep].label}
          style={{
            height: 400,
            width: '100%',
            objectFit: 'cover',
            display: 'block',
            overflow: 'hidden',
          }}
        />
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            {items[activeStep].label}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {items[activeStep].description}
          </Typography>
        </Box>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <IconButton
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <KeyboardArrowRight />
            </IconButton>
          }
          backButton={
            <IconButton onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
            </IconButton>
          }
        />
      </Paper>
    </Box>
  );
};

export default NewsCarousel;
