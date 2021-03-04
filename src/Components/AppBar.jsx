import * as React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = () => {
  const goBack = () => console.log('Went back');
  const handleSearch = () => console.log('Searching');
  const handleReset = () => console.log('Reset');

  return (
    <Appbar.Header>
      <Appbar.Content
        title="Is it Sunny Or Cloudy?"
        subtitle="Check your weather!"
      />
    </Appbar.Header>
  );
};

export default AppBar;
