import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useSettings } from './SettingsContext';  // Importamos el hook personalizado

const Settings = () => {
  const { isDarkMode, toggleTheme } = useSettings();  // Obtenemos el estado y la función para cambiar el tema

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Configuración
      </Typography>
      <Button variant="contained" onClick={toggleTheme}>
        Cambiar a {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </Button>
    </Box>
  );
};

export default Settings;
