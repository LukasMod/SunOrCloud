import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (text) => setSearchQuery(text);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      clearIcon="cancel"
      onIconPress={() => handleSearch(searchQuery)}
    />
  );
};

export default SearchBar;
