import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  InputBase,
  useTheme,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';

const settings = ['Profile', 'Change Theme', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useTheme();
  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleThemeChange = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* NoticiasMui */}
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              NoticiasMui
            </Typography>

            {/* Espaciador para empujar elementos hacia la derecha */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Buscador */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1,
                paddingX: 1,
                marginRight: 2,
                width: '300px',
              }}
            >
              <SearchIcon />
              <InputBase
                placeholder="Search…"
                sx={{ ml: 1, flex: 1 }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Box>

            {/* Botón Login */}
            <Button
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                marginRight: 2,
              }}
            >
              Login
            </Button>

            {/* Avatar y menú de usuario */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
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
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => {
                      handleCloseUserMenu();
                      if (setting === 'Change Theme') {
                        handleThemeChange();
                      }
                    }}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default ResponsiveAppBar;
