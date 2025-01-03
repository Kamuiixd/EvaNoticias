import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { useUser } from './UserContext';  // Importar useUser

const ProfilePage = () => {
  const { user } = useUser();  // Obtener los datos del usuario

  if (!user) {
    return <Typography variant="h6">No has iniciado sesión.</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', mt: 5 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>Perfil de Usuario</Typography>
          <Typography variant="body1">Nombre de Usuario: {user.username}</Typography>
          <Typography variant="body1">Correo Electrónico: {user.email}</Typography>
          <Typography variant="body1">Contraseña: {user.password}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfilePage;
