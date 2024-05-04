import { createTheme } from "@mui/material/styles";
import { ThemeFactory } from "./ThemeFacrory";

declare module '@mui/material/styles' {
  interface Theme {
    name: string 
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    name?: string
  }
}

const themeBase = createTheme({
  name: "dark",
  palette: {
    contrastThreshold: 4.5,
    primary: {
      main: "#2E4F4F",
      light: "#4E8D7C",
      dark: "#4E8D7C",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#0059b3",
      dark: "#003366",
      contrastText: "#ccffff",
    },
    background: {
      default: "#2C3333",
      paper: "#2E4F4F",
    },
  },
});

export const darkThemeMode = ThemeFactory(themeBase);
