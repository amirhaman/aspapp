// .storybook/preview.js
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider} from '@mui/material/styles';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { darkThemeMode } from '../src/styles/ThemeFactory/DarkTheme'
import { lightThemeMode } from "../src/styles/ThemeFactory/LightTheme";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    light: lightThemeMode,
    dark: darkThemeMode,
  },
  defaultTheme: 'light',
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
})];

