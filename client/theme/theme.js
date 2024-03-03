import { createTheme } from '@mui/material/styles';

// const theme = createTheme(); // DEFAULT THEME

// CUSTOM THEME
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(147, 42, 30)',
    },
    accent: '#ff6b81',
    text: {
      primary: 'rgb(30, 32, 34)',
      secondary: 'rgb(103, 119, 136)',
    },
    alternate: {
      main: 'rgb(247, 250, 255)',
      dark: 'rgb(237, 241, 247)',
    },
  }
});

export default theme;