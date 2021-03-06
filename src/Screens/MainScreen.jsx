import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import AppBar from '../Components/AppBar';
import Results from '../Components/Results';

const MainScreen = () => {
  const [search, setSearch] = useState('');
  const handleSearch = (text) => {
    setSearch(text);
  };

  return (
    <>
      <AppBar />
      <SearchBar handleSearch={handleSearch} />
      <Results city={search} />
    </>
  );
};

export default MainScreen;
