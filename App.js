import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, useTheme } from 'react-native-paper';
import theme from './src/CustomProperties/Themes';
import MainScreen from './src/Screens/MainScreen';

export default function App() {
  const { colors } = useTheme();
  return (
    <PaperProvider theme={theme}>
      <MainScreen />
      <View style={styles.container}>
        <Text style={{ color: colors.primary }}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
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
