import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';  // Importar useUser

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { saveUser } = useUser();  // Obtener la función para guardar el usuario
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && email && password) {
      // Crear un objeto con los datos del usuario
      const newUser = { username, email, password };
      
      // Guardar los datos del usuario
      saveUser(newUser);
      
      // Redirigir al login o a la página de inicio
      navigate('/login');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 5,
          marginBottom: 5, // Espacio entre el registro y el footer
          backgroundColor: '#fff',
          borderRadius: 3,
          boxShadow: 3,
          padding: 4,
          background: 'linear-gradient(135deg,rgb(167, 147, 147),rgb(93, 189, 192))',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: '#333' }}>
          Crear cuenta
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Nombre de Usuario"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '30px', // Bordes redondeados
              },
            }}
          />
          <TextField
            label="Correo Electrónico"
            type="email"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '30px', // Bordes redondeados
              },
            }}
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '30px', // Bordes redondeados
              },
            }}
          />
          
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              background: 'linear-gradient(135deg,rgb(167, 147, 147),rgb(93, 189, 192))',
              borderRadius: '30px', 
              '&:hover': {
                backgroundColor: '#303f9f', 
              },
            }}
          >
            Registrar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
