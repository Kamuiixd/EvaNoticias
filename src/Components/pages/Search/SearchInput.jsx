import React from 'react';
import { Box, InputBase, Button } from '@mui/material';
import { useSearch } from './SearchContext';

// Componente de entrada de búsqueda
const SearchInput = ({ onSearch }) => {
  const { searchQuery, setSearchQuery } = useSearch();

  const handleSearch = () => {
    if (onSearch) onSearch(searchQuery);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <InputBase
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        sx={{ flex: 1, padding: '5px', border: '1px solid gray', borderRadius: '4px' }}
      />
      <Button onClick={handleSearch} variant="contained" sx={{ ml: 1 }}>
        Search
      </Button>
    </Box>
  );
};

export default SearchInput;
