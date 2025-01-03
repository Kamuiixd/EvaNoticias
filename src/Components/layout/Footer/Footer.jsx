  import React from "react";
  import { Box, Typography, Link, Grid, IconButton, Container } from "@mui/material";
  import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

  const Footer = () => {
    return (
      <Box
        component="footer"
        sx={{
          backgroundColor: "#666f88",
          color: "#fff",
          padding: "40px 0",
          mt: "auto",
          width: "100%",
          position: "relative"
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} sx={{ justifyContent: "space-between" }}>
            {/* Navegación */}
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  letterSpacing: "0.1rem",
                  color: "#fff",
                  mb: 2,
                }}
              >
                Navegación
              </Typography>
              <Box>
                <Link href="/home" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                  Noticias
                </Link>
                <Link href="/profile" color="inherit" underline="hover" display="block">
                  Perfil
                </Link>
              </Box>
            </Grid>

            {/* Redes Sociales */}
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  letterSpacing: "0.1rem",
                  color: "#fff",
                  mb: 2,
                }}
              >
                Síguenos
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <IconButton
                  href="https://facebook.com"
                  target="_blank"
                  sx={{
                    color: "#fff",
                    bgcolor: "#3b5998",
                    '&:hover': { bgcolor: "#2d4373" },
                  }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  href="https://twitter.com"
                  target="_blank"
                  sx={{
                    color: "#fff",
                    bgcolor: "#1da1f2",
                    '&:hover': { bgcolor: "#0d95e8" },
                  }}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  href="https://instagram.com"
                  target="_blank"
                  sx={{
                    color: "#fff",
                    bgcolor: "#e4405f",
                    '&:hover': { bgcolor: "#d32e51" },
                  }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  href="https://linkedin.com"
                  target="_blank"
                  sx={{
                    color: "#fff",
                    bgcolor: "#0077b5",
                    '&:hover': { bgcolor: "#005983" },
                  }}
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Grid>

            {/* Contacto */}
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  letterSpacing: "0.1rem",
                  color: "#fff",
                  mb: 2,
                }}
              >
                Contacto
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                info@noticiasmui.com
              </Typography>
              <Typography variant="body2">+56 9 8548-4561</Typography>
            </Grid>
          </Grid>

          {/* Footer inferior */}
          <Box
            sx={{
              borderTop: "1px solid #444",
              mt: 4,
              pt: 2,
              textAlign: "center",
              color: "#aaa",
            }}
          >
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} NoticiasMui. Todos los derechos reservados.
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  };

  export default Footer;
