import { configureFonts, DefaultTheme } from 'react-native-paper';
import customFonts from './Fonts';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(customFonts),
  roundness: 15,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4169E1',
  },
  backgroundColors: {
    ...DefaultTheme.colors,
    primary: '#4169E1',
    secondary: '#e8f6ff',
    none: 'white',
  },
};

export default theme;
