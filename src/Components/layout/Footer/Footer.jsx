import React from "react";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2c3e50",
        color: "#fff",
        padding: "20px 0",
        mt: "auto",
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Navegación
          </Typography>
          <Link href="/NewsPage" color="inherit" underline="hover" display="block">
            Noticias
          </Link>
          <Link href="/Login" color="inherit" underline="hover" display="block">
            Perfil
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Síguenos
          </Typography>
          <Box>
            <IconButton href="https://facebook.com" target="_blank" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" color="inherit">
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          borderTop: "1px solid #ccc",
          marginTop: "20px",    
          textAlign: "center",
          paddingTop: "10px",
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} NoticiasMui. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
