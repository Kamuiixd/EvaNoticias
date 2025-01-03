import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import PaginatedNewsCards from '../Pagination/PaginatedNewsCards';  

function CategoryPage() {
  const { categoryName } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [categoryName]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Noticias en la categoría: {categoryName}
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
          <CircularProgress />
        </Box>
      ) : (
        <PaginatedNewsCards category={categoryName} />
      )}
    </Box>
  );
}

export default CategoryPage;
