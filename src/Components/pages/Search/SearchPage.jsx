import React from 'react';
import { useSearch } from './SearchContext';
import SearchInput from './SearchInput';

const SearchPage = () => {
  const { searchQuery } = useSearch();

  const handleSearch = (query) => {
    console.log('Search for:', query);
    // Aquí puedes hacer el llamado a la API para buscar noticias
  };

  return (
    <div>
      <h1>Search Page</h1>
      <SearchInput onSearch={handleSearch} />
      {searchQuery && <p>Results for: {searchQuery}</p>}
    </div>
  );
};

export default SearchPage;
