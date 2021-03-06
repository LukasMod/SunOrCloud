import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (text) => setSearchQuery(text);

  return (
    <Searchbar
      placeholder="Search city"
      onChangeText={onChangeSearch}
      value={searchQuery}
      clearIcon="cancel"
      onIconPress={() => handleSearch(searchQuery)}
      onSubmitEditing={() => handleSearch(searchQuery)}
      style={{ marginTop: 10 }}
    />
  );
};

export default SearchBar;
