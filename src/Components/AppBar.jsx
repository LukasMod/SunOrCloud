import React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = () => {
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
