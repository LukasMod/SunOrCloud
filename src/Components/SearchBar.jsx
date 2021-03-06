import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchWeather(searchQuery));
    setSearchQuery('');
  };

  return (
    <Searchbar
      placeholder="Search city"
      onChangeText={(text) => setSearchQuery(text)}
      value={searchQuery}
      clearIcon="cancel"
      onIconPress={() => handleSearch()}
      onSubmitEditing={() => handleSearch()}
      style={{ marginTop: 10 }}
    />
  );
};

export default SearchBar;
