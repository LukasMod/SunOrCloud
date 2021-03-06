import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider, useTheme } from 'react-native-paper';
import theme from './src/CustomProperties/Themes';
import MainScreen from './src/Screens/MainScreen';

export default function App() {
  const { colors } = useTheme();
  return (
    <PaperProvider theme={theme}>
      <MainScreen />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
