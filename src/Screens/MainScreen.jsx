import React from 'react';
import SearchBar from '../Components/SearchBar';
import AppBar from '../Components/AppBar';
import Results from '../Components/Results';

const MainScreen = () => {
  return (
    <>
      <AppBar />
      <SearchBar />
      <Results />
    </>
  );
};

export default MainScreen;
