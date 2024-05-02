import { createTheme } from "@mui/material/styles";
import { GlobalThemeComponent } from "./ThemeComponents/GlobalThemeComponent";
import GlobalStyledIcons from "./ThemeComponents/GlobalStyledIcons";
import StyledMuiList from "./ThemeComponents/GlobalStyledMuiList";
import GlobalStyledMuiTypography from "./ThemeComponents/GlobalStyledMuiTypography"


export const ThemeFactory = (props: any) =>
  createTheme({
    name: props.name,
    palette: {
      contrastThreshold: 4.5,
      primary: {
        main: props.palette.primary.main,
        light: props.palette.primary.light,
        dark: props.palette.primary.dark,
        contrastText: props.palette.primary.contrastText,
      },
      secondary: {
        main: props.palette.secondary.main,
        light: props.palette.secondary.light,
        dark: props.palette.secondary.dark,
        contrastText: props.palette.secondary.contrastText,
      },
      background: {
        default: props.palette.background.default,
        paper: props.palette.background.paper,
      },
    },
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        // most basic recommended timing
        standard: 300,
        // this is to be used in complex animations
        complex: 375,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
      easing: {
        // This is the most common easing curve.
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        // Objects enter the screen at full velocity from off-screen and
        // slowly decelerate to a resting point.
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        // Objects leave the screen at full velocity. They do not decelerate when off-screen.
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        // The sharp curve is used by objects that may return to the screen at any time.
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: () => GlobalThemeComponent(props),
      },
      MuiList : StyledMuiList,
      MuiSvgIcon: GlobalStyledIcons,
      MuiTypography: GlobalStyledMuiTypography,
    },
  });
