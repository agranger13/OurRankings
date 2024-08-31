import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your custom theme
import NavigationManager from './components/Navigation/NavigationManager';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationManager />
    </ThemeProvider>
  );
}

export default App;
