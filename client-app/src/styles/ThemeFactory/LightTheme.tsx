import { createTheme } from '@mui/material/styles';
import { ThemeFactory } from './ThemeFacrory';

declare module '@mui/material/styles' {
  interface Theme { 
    name: string
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    name?: string
  }
}

const Theme = createTheme({
  name: "light",
  palette: {
    contrastThreshold: 4.5,
    primary: {
      main: "#D8E3E7",
      light: "#F5F5F5",
      dark: "#EFEFEF",
      contrastText: "#2E4F4F",
    },
    secondary: {
      main: "#666699",
      light: "#9494b8",
      dark: "#47476b",
      contrastText: "#3d3d5c",
    },
    background: {
      default: "#D8E3E7",
      paper: "#F5F5F5"
    },
  },
  
});

export const lightThemeMode = ThemeFactory(Theme);