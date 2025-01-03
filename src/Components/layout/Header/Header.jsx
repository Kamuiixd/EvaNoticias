import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, InputBase, useTheme, ThemeProvider, createTheme } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../LogIn/UserContext'; // Importar useUser
import NewspaperIcon from '@mui/icons-material/Newspaper';

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const theme = useTheme();
  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleThemeChange = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const userData = JSON.parse(localStorage.getItem('user')) || null;
  const userName = userData ? userData.username : 'Usuario';

  return (
    <ThemeProvider theme={darkTheme}>
      {/* AppBar con fondo y opciones, ocupa todo el ancho */}
      <AppBar position="fixed" sx={{ background: 'linear-gradient(135deg,rgb(167, 147, 147),rgb(93, 189, 192))', }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo y Nombre */}
            <NewspaperIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} fontSize="large" />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/home"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Noticias
            </Typography>

            {/* Barra de Navegación */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                component={Link}
                to="/home"
                sx={{ color: 'white', marginRight: 2 }}
              >
                Inicio
              </Button>
              <Button
                component={Link}
                to="/favorites"
                sx={{ color: 'white', marginRight: 2 }}
              >
                Favoritos
              </Button>
            </Box>

            {/* Barra de Búsqueda */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1,
                paddingX: 1,
                marginRight: 2,
                width: { xs: '200px', md: '300px' },
              }}
            >
              <SearchIcon onClick={handleSearchSubmit} sx={{ cursor: 'pointer', color: '#757de8' }} />
              <InputBase
                placeholder="Buscar..."
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{ ml: 1, flex: 1 }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Box>

            {/* Opciones del Usuario */}
            {user ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" sx={{ color: 'white', marginRight: 2 }}>
                  {userName}
                </Typography>
                <Tooltip title="Abrir configuración">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={() => navigate('/profile')}>
                    <Typography textAlign="center">Perfil</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleThemeChange}>
                    <Typography textAlign="center">Cambiar Tema</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Cerrar Sesión</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Button
                component={Link}
                to="/login"
                sx={{ color: 'white' }}
              >
                Iniciar Sesión
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default ResponsiveAppBar;
