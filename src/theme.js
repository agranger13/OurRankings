// src/theme.js
import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Primary color
    },
    secondary: {
      main: '#dc004e', // Secondary color
    },
    background: {
      default: '#f5f5f5', // Default background color
    },
    text: {
      primary: '#000000', // Text color
      secondary: '#555555',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  // Add other custom configurations if needed
});

export default theme;
