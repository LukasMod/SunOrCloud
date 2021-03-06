import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './src/store/store';
import theme from './src/CustomProperties/Themes';
import MainScreen from './src/Screens/MainScreen';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <MainScreen />
      </PaperProvider>
    </Provider>
  );
}
