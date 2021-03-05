import * as React from 'react';
import { Appbar } from 'react-native-paper';
import SearchBar from '../Components/SearchBar';
import AppBar from '../Components/AppBar';
import Results from '../Components/Results';

const MainScreen = () => {
  const [search, setSearch] = React.useState('');
  const handleSearch = (text) => {
    setSearch(text);
  };

  return (
    <>
      <AppBar />
      <SearchBar handleSearch={handleSearch} />
      <Results city={search} />
      {/* <Text>Hi</Text> */}
    </>
  );
};

export default MainScreen;
