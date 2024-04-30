import React, { useEffect, useState, useMemo, createContext} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { lightThemeMode } from './ThemeFactory/LightTheme';
import { darkThemeMode } from './ThemeFactory/DarkTheme';

type Props = {
  children: React.ReactNode
}

export const ThemeModeContext = createContext<object>({
  currentTheme: undefined,
  setCurrentTheme: () => {},
});

export default function ThemeCustomModeProvider({children}: Props) {
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);

  useEffect(() => {
    if (isUserSelectedTheme()) {
      setCurrentTheme(localStorage.getItem('THEME_MODE'));
    } else {
      setCurrentTheme('darkTheme');
    }
  }, [])

  const muiWrapperUtils = async () => {
    setCurrentTheme((prevMode) => (prevMode === "lightTheme" ? "darkTheme" : "lightTheme"))
  }

  const theme = useMemo(
    () =>
      currentTheme === "darkTheme" ? darkThemeMode : lightThemeMode,
    [currentTheme]
  );

  const isUserSelectedTheme = () => {
    const selectedTheme = localStorage.getItem('THEME_MODE');
    if (selectedTheme) return true;
    return false;
  }

  const value = { currentTheme, setCurrentTheme, muiWrapperUtils };

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}
